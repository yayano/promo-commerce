import {
  placeOrder,
  getguestOrders,
} from "../controllers/guestOrderController.js";
import express from "express";

const guestOrderRoute = express.Router();

//guest place order
guestOrderRoute.post("/place", placeOrder);

//admin get all orders
guestOrderRoute.post("/guestOrders", getguestOrders);
export default guestOrderRoute;
