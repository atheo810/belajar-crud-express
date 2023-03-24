import express from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController";
import { getUserById } from "../controllers/UserController";

const router = express.Router();

router.get("/product", getProducts);
router.get("/product/:id", getUserById);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
