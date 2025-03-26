import guestOrderModel from "../models/guestOrderModel.js";
//placing orders using COD function
const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const orderData = {
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new guestOrderModel(orderData);
    await newOrder.save();
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//get guest Orders from admin panel

const getguestOrders = async (req, res) => {
  try {
    const guestorders = await guestOrderModel.find({});
    res.json({ success: true, guestorders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { placeOrder, getguestOrders };
