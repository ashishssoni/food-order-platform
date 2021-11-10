import mongoose from 'mongoose'

const { Schema } = mongoose

const OrderSchema = new Schema(
  {
    email: { type: String, trim: true },
    orderItems: { type: Object, required: true },
    totalPrice: { type: String, required: true },
    creditCardNo: { type: String, required: false },
    paymentId: { type: String, required: false }
  },
  { timestamps: true }
)

OrderSchema.index({ email: 1 })

const OrderModel = mongoose.model('Order', OrderSchema)

export { OrderModel }
