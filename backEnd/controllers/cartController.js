import userModel from "../models/userModel.js";
//add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      // cartData[itemId] = {};
      cartData[itemId] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to card" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Updated cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("userData", req.body);
    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { addToCart, updateCart, getUserCart };
