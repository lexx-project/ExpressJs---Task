import { Router } from "express";
import { createStore, deleteStore, getAllStore, getStoreById, updateStore } from "../controllers/store.controller";
import { validate } from "../middleware/product.validation";
import { createStoreValidation, updateStoreValidation } from "../middleware/store.validation";

const router = Router()

router.get("/stores", getAllStore)
router.get("/stores/:id", getStoreById)
router.post("/stores", validate(createStoreValidation),createStore)
router.put("/stores/:id", validate(updateStoreValidation),updateStore)
router.delete("/stores/:id", deleteStore)

export default router