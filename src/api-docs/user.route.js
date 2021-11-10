const userDocs = () => {
  /**
   *
   * @apiDefine userProfileRequestResponse
   * @apiHeader {string} Authorization Bearer Token
   *
   * @apiSuccess {number} statusCode Statuscode of response
   * @apiSuccess {string} message Message of response
   * @apiSuccess {string} _id Id of user
   * @apiSuccess {string} Name Name of user
   * @apiSuccess {address} Address Adress of user
   * @apiSuccess {string} streetAddress streetAddress of  user
   * @apiSuccess {string} email Email Id of user
   * @apiSuccess {string} createdAt Created time  of user
   * @apiSuccess {string} updatedAt Updated time of user
   * @apiSuccess {string} __v Version Key
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *   {
   *   "statusCode": 200,
   *   "message": "OK",
   *   "data": {
       "_id": "618ba82b48388157c1c8cad5",
        "name": "Ashish Son",
        "email": "as@gmail.com",
        "address": "mumbai",
        "streetAddress": "chembur",
        "createdAt": "2021-11-10T11:08:27.370Z",
        "updatedAt": "2021-11-10T11:08:27.370Z",
        "__v": 0
   *     }
   *   }
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 401 Invalid token
   *  {
   *   "statusCode": 401,
   *   "message": "Invalid token",
   *   "data": {}
   *  }
   *
   */
  /**
   *
   * @apiDefine loginRequestResponse
   * @apiParam {String} email Email Id of the user
   * @apiParam {String} password Password of the user
   * @apiParamExample {json} Input
   *  {
   *        "email": "soni.vippu@gmail.com",
            "password": "ashish@123"
   *   }
   * @apiSuccess {number} statusCode Statuscode of response
   * @apiSuccess {string} message Message of response
   * @apiSuccess {Object} userDetails User Details of User
   * @apiSuccess {Object} orderItems Order Items of User
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   *    {
   *    "statusCode": 200,
   *   "message": "OK",
   *   "data": {
        "userDetails": {
            "name": "Ashish Son",
            "userEmail": "soni.vippu@gmail.com",
            "address": "mumbai",
            "streetAddress": "chembur",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThiYzE2MzBjODZmMTk2NTJkNzJiZjMiLCJuYW1lIjoiQXNoaXNoIFNvbiIsImVtYWlsIjoic29uaS52aXBwdUBnbWFpbC5jb20iLCJhZGRyZXNzIjoibXVtYmFpIiwic3RyZWV0QWRkcmVzcyI6ImNoZW1idXIiLCJjcmVhdGVkQXQiOiIyMDIxLTExLTEwVDEyOjU2OjAzLjUxM1oiLCJ1cGRhdGVkQXQiOiIyMDIxLTExLTEwVDEyOjU2OjAzLjUxM1oiLCJfX3YiOjAsImlhdCI6MTYzNjU0ODk3N30.vYF9vZluxUSJO81Tk6VmV9V0d9G0t_8xrEFPv4NJu4k"
        },
        "orderItems": {
            "cheezeBurger": "$9",
            "pizza": "$15",
            "sides": "$5",
            "dessert": "$3"
        }
    }}
   *   }
   * @apiErrorExample {json} Error-Response:
   * HTTP/1.1 401 Invalid Password
   *      {
   *          "statusCode": 401,
   *          "message": "Invalid password"
   *      }
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 404 Invalid Password
   *      {
   *          "statusCode": 404,
   *          "message": "User not Found"
   *      }
   */
  /**
   *
   * @apiDefine logoutRequestResponse
   * @apiHeader {string} Authorization Bearer Token
   *
   * @apiSuccess (200) {number} statusCode StatusCode of response
   * @apiSuccess (200) {string} message  Message of Response
   *
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 User logout successful
   *
   *  {
   *    "statusCode": 200,
   *    "message": "User logout successful"
   *  }
   * @apiErrorExample {json} Error-Response:
   * HTTP/1.1 401 Invalid token
   *  {
   *   "statusCode": 401,
   *   "message": "Invalid token",
   *   "data": {}
   *  }
   *
   */
  /**
   *
   * @apiDefine signUpRequestResponse
   * @apiHeader {string} Authorization Bearer Token
   *
   * @apiParam {string} Name Name of user
   * @apiParam {string} Address Adress of user
   * @apiParam {string} streetAddress streetAddress of  user
   * @apiParam {string} email Email Id of user
   * @apiParam  {Stgrin} password Password of user
   *
   * @apiSuccess {number} statusCode Statuscode of response
   * @apiSuccess {string} message Message of response
   * @apiSuccess {string} _id Id of user
   * @apiSuccess {string} Name Name of user
   * @apiSuccess {address} Address Adress of user
   * @apiSuccess {string} streetAddress streetAddress of  user
   * @apiSuccess {string} email Email Id of user
   * @apiSuccess {string} createdAt Created time  of user
   * @apiSuccess {string} updatedAt Updated time of user
   * @apiSuccess {string} __v Version Key
   * @apiParamExample  {json} Request-Example:
   {
    "name": "Ashish Son",
    "email": "soni.vippu@gmail.com",
    "address": "mumbai",
    "password": "ashish@123",
    "streetAddress": "chembur"
    }
   *
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 Ok
   * {
   *    "statusCode": 200,
   *    "message": "Ok",
   *   "data": {
        "_id": "618bc1630c86f19652d72bf3",
        "name": "Ashish Son",
        "email": "soni.vippu@gmail.com",
        "address": "mumbai",
        "streetAddress": "chembur",
        "createdAt": "2021-11-10T12:56:03.513Z",
        "updatedAt": "2021-11-10T12:56:03.513Z",
        "__v": 0
     }
   * }
   * @apiErrorExample {json} Error-Response:
   * HTTP/1.1 401 Invalid token
   *  {
   *   "statusCode": 401,
   *   "message": "Invalid token",
   *   "data": {}
   *  }
   *
   */
  /**
   *
   * @apiDefine saveOrderRequestResponse
   * @apiHeader {string} Authorization Bearer Token
   *
   * @apiParam {Object} orderItems Order Items of user
   * @apiParam {string} totalPrice Total Price for user
   *
   * @apiSuccess {number} statusCode Statuscode of response
   * @apiSuccess {string} message Message of response
   * @apiSuccess {string} email Email Id of user
   * @apiParamExample  {json} Request-Example:
   * {
      "orderItems": {
        "cheezeBurger": 2,
        "pizza": 1,
        "sides": 3,
        "dessert": 3
     },
      "totalPrice": "$123"
   * }
   *
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 Ok
   * {
   *    "statusCode": 200,
   *    "message": "Ok",
   *   "data": "as@gmail.com"
   * }
   * @apiErrorExample {json} Error-Response:
   * HTTP/1.1 401 Invalid token
   *  {
   *   "statusCode": 401,
   *   "message": "Invalid token",
   *   "data": {}
   *  }
   *
   */
  /**
   *
   * @apiDefine placeOrderRequestResponse
   * @apiHeader {string} Authorization Bearer Token
   *
   * @apiParam {string} creditCardNo Credit CardÎ of user
   * @apiParam {string} totalPrice Total Price for user
   *
   * @apiSuccess {number} statusCode Statuscode of response
   * @apiSuccess {string} message Message of response
   * @apiSuccess {string} email Email Id of user
   * @apiSuccess {string} paymentId payment Id of user
   * @apiParamExample  {json} Request-Example:
   *  {
        "creditCardNo": "354678685456768",
        "totalPrice": "$123"
   *  }
   *
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 Ok
   * {
   *    "statusCode": 200,
   *    "message": "Ok",
   *   "data": {
        "email": "as@gmail.com",
        "paymentId": "d3z-rrCKLY9tWL76LMo7w"
   * }
   * @apiErrorExample {json} Error-Response:
   * HTTP/1.1 401 Invalid token
   *  {
   *   "statusCode": 401,
   *   "message": "Invalid token",
   *   "data": {}
   *  }
   *
   */
}

export { userDocs }
