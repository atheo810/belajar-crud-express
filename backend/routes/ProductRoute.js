// import express dari depedencies dan lakukan import dari file controllers/ProductController.js
import express from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController";

// membuat constraint untuk mensetting router
const router = express.Router();

// addres router yang kita buat
router.get("/product", getProducts);
router.get("/product/:id", getProductsById);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

// export hasil router
export default router;
