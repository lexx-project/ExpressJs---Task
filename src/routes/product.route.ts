import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/product.controller";
import {
  createProductValidation,
  validate,
} from "../middleware/product.validation";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();
console.log("Loading product routes...");
router.get("/products", authenticate, getAllProduct);
router.post("/products", validate(createProductValidation), createProduct);
router.get("/products/:id", getProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
