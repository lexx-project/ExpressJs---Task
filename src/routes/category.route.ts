import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "../controllers/category.controller";
import { searchCategories } from "../services/category.service";
import { validate } from "../utils/validate";
import { createCategoryValidation, updateCategoryValidation } from "../middleware/category.validation";

const router = Router()

router.get("/categories", getAllCategory)
router.get("/categories/search", searchCategories)
router.get("/categories/:id", getCategoryById)
router.post("/categories", validate(createCategoryValidation), createCategory)
router.put("/categories/:id", validate(updateCategoryValidation), updateCategory)
router.delete("/categories/:id", deleteCategory)

export default router