import Joi from '@hapi/joi'

const UserSchema = Joi.object().keys({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  streetAddress: Joi.string().trim().required(),
  password: Joi.string().trim().required()
})

export { UserSchema }
