import bcrypt from 'bcrypt'
import crypto from 'crypto'
import Mailgun from 'mailgun-js'
import { nanoid } from 'nanoid'
import jsonwebtoken from 'jsonwebtoken'
import { HTTP_STATUS, ERR_MSG, RES_MSG, ITMES } from '../constants'
import { UserModel, OrderModel } from '../models'
import { RedisModel } from '../config'
import { logError, logData, ResponseBody, ResponseHandler } from '../utils'
import { UserSchema } from '../validation'

const responseHandler = new ResponseHandler()

const { EMAIL_DOMAIN, EMAIL_API_KEY } = process.env

const getProfile = async (request, response) => {
  const { _claims: claims } = request
  const { email } = claims
  const user = await UserModel.findOne({ email }, { password: 0 })
  return responseHandler.handleBody(new ResponseBody(HTTP_STATUS.OK, RES_MSG.OK, user), response)
}

const createUser = async (request, response) => {
  const { body } = request
  await UserSchema.validateAsync(body)
  const user = await UserModel.create(body)
  delete user._doc.password
  return responseHandler.handleBody(
    new ResponseBody(HTTP_STATUS.CREATED, RES_MSG.OK, user),
    response
  )
}

const login = async (request, response) => {
  const { body } = request
  const { email, password } = body

  const user = await UserModel.findOne({ email }).lean()
  if (!user) {
    return responseHandler.handleError(
      new ResponseBody(HTTP_STATUS.NOT_FOUND, ERR_MSG.INVALID_USER),
      response
    )
  }

  const { name, email: userEmail, address, streetAddress } = user

  const pstatus = await bcrypt.compare(password, user.password)
  delete user.password

  if (!pstatus) {
    return responseHandler.handleError(
      new ResponseBody(HTTP_STATUS.UNAUTHORIZED, ERR_MSG.INVALID_USER),
      response
    )
  }

  const { token } = await generateToken(user)

  const userDetails = { name, userEmail, address, streetAddress, token }
  return responseHandler.handleBody({ userDetails, orderItems: ITMES }, response)
}

const logout = async (request, response) => {
  const { email } = request
  await RedisModel.del(email)
  response.setHeader('Clear-Site-Data', '"cache", "cookies"')
  return responseHandler.handleBody(new ResponseBody(HTTP_STATUS.OK, RES_MSG.LOGOUT), response)
}

const saveOrder = async (request, response) => {
  const { _claims, body } = request
  const { orderItems, totalPrice } = body
  const { email } = _claims

  const orderDetails = { email, orderItems, totalPrice }
  await OrderModel.create(orderDetails)

  return responseHandler.handleBody(
    new ResponseBody(HTTP_STATUS.CREATED, RES_MSG.OK, email),
    response
  )
}

const placeOrder = async (request, response) => {
  const { _claims, body } = request
  const { creditCardNo, totalPrice } = body
  const { email } = _claims

  const paymentId = nanoid()
  await OrderModel.findOneAndUpdate({ email }, { $set: { creditCardNo, totalPrice, paymentId } })

  const mailgun = new Mailgun({ apiKey: EMAIL_API_KEY, domain: EMAIL_DOMAIN })
  const data = {
    from: 'Food Order <me@samples.mailgun.org>',
    to: email,
    subject: `Payment details of Order with payment ID ${paymentId}`,
    text: `Hi, Payment done for your order of ${totalPrice} with the credit card. The payment ID for the order is ${paymentId}`
  }

  await mailgun.messages().send(data, function (_error, body) {
    if (_error) {
      logError({ groupName: 'placeOrder', err: _error })
      return responseHandler.handleError(
        new ResponseBody(HTTP_STATUS.BAD_REQUEST, ERR_MSG.SOMETHING_WENT_WRONG),
        response
      )
    }
    logData({ groupName: 'placeOrder', message: 'Email Send', data: { body } })
  })

  return responseHandler.handleBody(
    new ResponseBody(HTTP_STATUS.OK, RES_MSG.ORDER_DONE, { email, paymentId }),
    response
  )
}

const checkToken = async (request, response, next) => {
  const token = getToken(request)
  const { user } = await validateToken(token)
  request.email = user.email
  request._jwtToken = token
  request._claims = user
  next()
}

const generateToken = async user => {
  const { email } = user
  const tokenSecretKey = crypto.randomBytes(16).toString('hex')
  const existingLoginIn = await RedisModel.get(email)
  const secondSession = Boolean(existingLoginIn)
  const jwt = jsonwebtoken.sign(user, `${tokenSecretKey}`)
  await RedisModel.set(email, { tokenSecretKey }, { expiry: '' })
  await RedisModel.del('login_' + email)
  logData({ groupName: 'login', message: 'Login pass', data: { email } })

  return { token: jwt, user, secondSession }
}

const validateToken = async token => {
  try {
    const user = jsonwebtoken.decode(token)
    if (!user) {
      throw new ResponseBody(
        HTTP_STATUS.UNAUTHORIZED,
        ERR_MSG.SESSION_TERMINATED,
        {},
        ERR_MSG.TOKEN_ERROR
      )
    }
    const { email } = user
    const userDetails = await RedisModel.get(email)

    if (!userDetails) {
      throw new ResponseBody(HTTP_STATUS.UNAUTHORIZED, ERR_MSG.TOKEN_EXPIRED, { email })
    }
    const { tokenSecretKey = '' } = userDetails

    if (!tokenSecretKey) {
      throw new ResponseBody(
        HTTP_STATUS.UNAUTHORIZED,
        ERR_MSG.SESSION_TERMINATED,
        { email },
        ERR_MSG.TOKEN_ERROR
      )
    }
    const tokenVerify = jsonwebtoken.verify(token, `${tokenSecretKey}`)
    await RedisModel.set(email, { tokenSecretKey }, { expiry: '' })

    if (!tokenVerify) {
      throw new ResponseBody(
        HTTP_STATUS.UNAUTHORIZED,
        ERR_MSG.SESSION_TERMINATED,
        { email },
        ERR_MSG.TOKEN_ERROR
      )
    }
    return { user, tokenSecretKey }
  } catch (e) {
    logError({ err: e, groupName: 'ValidateToken' })
    throw new ResponseBody(
      HTTP_STATUS.UNAUTHORIZED,
      ERR_MSG.SESSION_TERMINATED,
      {},
      ERR_MSG.TOKEN_ERROR
    )
  }
}

const getToken = request => {
  const authorization = request.headers.authorization || ''
  return authorization.split(' ')[1]
}

export const usersController = {
  createUser,
  login,
  checkToken,
  logout,
  validateToken,
  getProfile,
  saveOrder,
  placeOrder
}
