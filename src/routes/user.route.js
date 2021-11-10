import express from 'express'
import { asyncMiddleware } from '../middlewares'
import { usersController } from '../controllers/user.controller'
import { userDocs } from '../api-docs'

const userRouter = express.Router()

userDocs()

userRouter.get(
  '/profile',
  asyncMiddleware(usersController.checkToken),
  asyncMiddleware(usersController.getProfile)
)
/**
 *
 * @api {get} users/profile Get User Information
 * @apiName Profile
 * @apiGroup User
 * @apiDescription API to Get User Information
 *
 * @apiUse userProfileRequestResponse
 *
 */

userRouter.post('/login', asyncMiddleware(usersController.login))
/**
 *
 * @api {post} users/login Login
 * @apiName Login
 * @apiGroup User
 * @apiDescription API to Login for different user
 *
 * @apiUse loginRequestResponse
 *
 */

userRouter.get(
  '/logout',
  asyncMiddleware(usersController.checkToken),
  asyncMiddleware(usersController.logout)
)
/**
 *
 * @api {post} users/logout Logout
 * @apiName Logout
 * @apiGroup User
 * @apiDescription API to Logout the User
 *
 * @apiUse logoutRequestResponse
 *
 */

userRouter.post('/sign-up', asyncMiddleware(usersController.createUser))
/**
 *
 * @api {post} users/sign-up Creating New User
 * @apiName Signup
 * @apiGroup User
 * @apiDescription API to Create New User
 *
 * @apiUse signUpRequestResponse
 *
 */

userRouter.post(
  '/save-order',
  asyncMiddleware(usersController.checkToken),
  asyncMiddleware(usersController.saveOrder)
)
/**
 *
 * @api {post} users/save-order Saving Order
 * @apiName Save Order
 * @apiGroup User
 * @apiDescription API to Save User Orders
 *
 * @apiUse saveOrderRequestResponse
 *
 */

userRouter.post(
  '/place-order',
  asyncMiddleware(usersController.checkToken),
  asyncMiddleware(usersController.placeOrder)
)
/**
 *
 * @api {post} users/place-order Placing Order
 * @apiName Place Order
 * @apiGroup User
 * @apiDescription API to Place User Orders
 *
 * @apiUse placeOrderRequestResponse
 *
 */

export { userRouter }
