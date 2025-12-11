import { Router } from "express";
import { createStore, deleteStore, getAllStore, getStoreById, updateStore } from "../controllers/store.controller.js";
import { validate } from "../middleware/product.validation.js";
import { createStoreValidation, updateStoreValidation } from "../middleware/store.validation.js";
const router = Router();
router.get("/stores", getAllStore);
router.get("/store/:id", getStoreById);
router.post("/store", validate(createStoreValidation), createStore);
router.put("/store/:id", validate(updateStoreValidation), updateStore);
router.delete("/store/:id", deleteStore);
export default router;
//# sourceMappingURL=store.route.js.map
