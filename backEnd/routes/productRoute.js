import express from "express";
import {
  addProduct,
  listProducts,
  removeProducts,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
const productRouter = express.Router();
const fields = [
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 },
];
productRouter.post("/add", upload.fields(fields), addProduct);
productRouter.post("/remove", removeProducts);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;
