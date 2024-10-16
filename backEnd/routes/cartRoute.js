import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";
const cartRouter = express.Router();
cartRouter.get("/get", authUser, getUserCart);
cartRouter.get("/get", authUser, addToCart);
cartRouter.get("/get", authUser, updateCart);

export default cartRouter;
