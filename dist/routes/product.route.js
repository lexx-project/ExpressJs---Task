import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../controllers/product.controller.js";
import { createProductValidation, validate } from "../middleware/product.validation.js";
const router = Router();
console.log("Loading product routes...");
router.get("/products", (req, res, next) => {
    console.log("Route /products matched");
    getAllProduct(req, res, next);
});
router.post("/products", validate(createProductValidation), createProduct);
router.get("/products/:id", getProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
export default router;
//# sourceMappingURL=product.route.js.map
