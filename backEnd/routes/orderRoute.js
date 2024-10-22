import express from "express";
import {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/auth.js";
const orderRouter = express.Router();

//admin endpoints
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment endpoints
orderRouter.post("/place", userAuth, placeOrder);

//user endpoints
orderRouter.post("/userOrders", userAuth, userOrders);

export default orderRouter;
