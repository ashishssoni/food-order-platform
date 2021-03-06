define({ "api": [
  {
    "type": "post",
    "url": "users/login",
    "title": "Login",
    "name": "Login",
    "group": "User",
    "description": "<p>API to Login for different user</p>",
    "version": "0.0.0",
    "filename": "src/routes/user.route.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n      \"email\": \"soni.vippu@gmail.com\",\n           \"password\": \"ashish@123\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Statuscode of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Message of response</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userDetails",
            "description": "<p>User Details of User</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orderItems",
            "description": "<p>Order Items of User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n   \"statusCode\": 200,\n  \"message\": \"OK\",\n  \"data\": {\n        \"userDetails\": {\n            \"name\": \"Ashish Son\",\n            \"userEmail\": \"soni.vippu@gmail.com\",\n            \"address\": \"mumbai\",\n            \"streetAddress\": \"chembur\",\n            \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThiYzE2MzBjODZmMTk2NTJkNzJiZjMiLCJuYW1lIjoiQXNoaXNoIFNvbiIsImVtYWlsIjoic29uaS52aXBwdUBnbWFpbC5jb20iLCJhZGRyZXNzIjoibXVtYmFpIiwic3RyZWV0QWRkcmVzcyI6ImNoZW1idXIiLCJjcmVhdGVkQXQiOiIyMDIxLTExLTEwVDEyOjU2OjAzLjUxM1oiLCJ1cGRhdGVkQXQiOiIyMDIxLTExLTEwVDEyOjU2OjAzLjUxM1oiLCJfX3YiOjAsImlhdCI6MTYzNjU0ODk3N30.vYF9vZluxUSJO81Tk6VmV9V0d9G0t_8xrEFPv4NJu4k\"\n        },\n        \"orderItems\": {\n            \"cheezeBurger\": \"$9\",\n            \"pizza\": \"$15\",\n            \"sides\": \"$5\",\n            \"dessert\": \"$3\"\n        }\n    }}\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Password\n     {\n         \"statusCode\": 401,\n         \"message\": \"Invalid password\"\n     }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Invalid Password\n {\n     \"statusCode\": 404,\n     \"message\": \"User not Found\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "users/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "User",
    "description": "<p>API to Logout the User</p>",
    "version": "0.0.0",
    "filename": "src/routes/user.route.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>StatusCode of response</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Message of Response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 User logout successful\n\n {\n   \"statusCode\": 200,\n   \"message\": \"User logout successful\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid token\n {\n  \"statusCode\": 401,\n  \"message\": \"Invalid token\",\n  \"data\": {}\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "users/place-order",
    "title": "Placing Order",
    "name": "Place_Order",
    "group": "User",
    "description": "<p>API to Place User Orders</p>",
    "version": "0.0.0",
    "filename": "src/routes/user.route.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "creditCardNo",
            "description": "<p>Credit Card?? of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "totalPrice",
            "description": "<p>Total Price for user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"creditCardNo\": \"354678685456768\",\n       \"totalPrice\": \"$123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Statuscode of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Message of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "paymentId",
            "description": "<p>payment Id of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n  \"data\": {\n        \"email\": \"as@gmail.com\",\n        \"paymentId\": \"d3z-rrCKLY9tWL76LMo7w\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid token\n {\n  \"statusCode\": 401,\n  \"message\": \"Invalid token\",\n  \"data\": {}\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "users/profile",
    "title": "Get User Information",
    "name": "Profile",
    "group": "User",
    "description": "<p>API to Get User Information</p>",
    "version": "0.0.0",
    "filename": "src/routes/user.route.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Statuscode of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Message of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "address",
            "optional": false,
            "field": "Address",
            "description": "<p>Adress of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "streetAddress",
            "description": "<p>streetAddress of  user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time  of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "__v",
            "description": "<p>Version Key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n\"statusCode\": 200,\n\"message\": \"OK\",\n\"data\": {\n     \"_id\": \"618ba82b48388157c1c8cad5\",\n      \"name\": \"Ashish Son\",\n      \"email\": \"as@gmail.com\",\n      \"address\": \"mumbai\",\n      \"streetAddress\": \"chembur\",\n      \"createdAt\": \"2021-11-10T11:08:27.370Z\",\n      \"updatedAt\": \"2021-11-10T11:08:27.370Z\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Invalid token\n{\n \"statusCode\": 401,\n \"message\": \"Invalid token\",\n \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "users/save-order",
    "title": "Saving Order",
    "name": "Save_Order",
    "group": "User",
    "description": "<p>API to Save User Orders</p>",
    "version": "0.0.0",
    "filename": "src/routes/user.route.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "orderItems",
            "description": "<p>Order Items of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "totalPrice",
            "description": "<p>Total Price for user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"orderItems\": {\n        \"cheezeBurger\": 2,\n        \"pizza\": 1,\n        \"sides\": 3,\n        \"dessert\": 3\n     },\n      \"totalPrice\": \"$123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Statuscode of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Message of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n  \"data\": \"as@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid token\n {\n  \"statusCode\": 401,\n  \"message\": \"Invalid token\",\n  \"data\": {}\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "users/sign-up",
    "title": "Creating New User",
    "name": "Signup",
    "group": "User",
    "description": "<p>API to Create New User</p>",
    "version": "0.0.0",
    "filename": "src/routes/user.route.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Address",
            "description": "<p>Adress of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "streetAddress",
            "description": "<p>streetAddress of  user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Stgrin",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\": \"Ashish Son\",\n \"email\": \"soni.vippu@gmail.com\",\n \"address\": \"mumbai\",\n \"password\": \"ashish@123\",\n \"streetAddress\": \"chembur\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Statuscode of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Message of response</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "address",
            "optional": false,
            "field": "Address",
            "description": "<p>Adress of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "streetAddress",
            "description": "<p>streetAddress of  user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time  of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "__v",
            "description": "<p>Version Key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n  \"data\": {\n        \"_id\": \"618bc1630c86f19652d72bf3\",\n        \"name\": \"Ashish Son\",\n        \"email\": \"soni.vippu@gmail.com\",\n        \"address\": \"mumbai\",\n        \"streetAddress\": \"chembur\",\n        \"createdAt\": \"2021-11-10T12:56:03.513Z\",\n        \"updatedAt\": \"2021-11-10T12:56:03.513Z\",\n        \"__v\": 0\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid token\n {\n  \"statusCode\": 401,\n  \"message\": \"Invalid token\",\n  \"data\": {}\n }",
          "type": "json"
        }
      ]
    }
  }
] });
