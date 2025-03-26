import mongoose from "mongoose";

const guestOrderSchema = new mongoose.Schema({
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true, default: "Order Placed" },
  paymentMethod: { type: String, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Number, required: true },
});
const guestOrderModel =
  mongoose.models.guest || mongoose.model("guest", guestOrderSchema);
export default guestOrderModel;
