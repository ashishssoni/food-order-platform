import express from 'express'
import { userRouter } from './user.route'
import { decryptClientRequest, ResponseBody } from '../utils'
import { scriptTagRemover } from '../middlewares'
import { HTTP_STATUS, RES_MSG } from '../constants'

const Router = express.Router()

Router.get('/health-check', (request, response, next) => {
  const responseBody = new ResponseBody(HTTP_STATUS.OK, RES_MSG.OK)
  response.status(responseBody.statusCode).json(responseBody)
})

Router.get('/version', (request, response, next) => {
  const version = process.env.npm_package_version
  const data = { version }
  const responseBody = new ResponseBody(HTTP_STATUS.OK, RES_MSG.OK, data)
  response.status(responseBody.statusCode).json(responseBody)
})

// Disable Journey Middleware

Router.use(scriptTagRemover)

// Decrypt Request If Encryption Enabled
Router.use(decryptClientRequest)

Router.use('/users', userRouter)

export { Router }
