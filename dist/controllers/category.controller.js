import * as categoryService from "../services/category.service.js";
import { asyncHandler } from "../utils/async.handler.js";
import { succesResponse } from "../utils/response.js";
export const getAllCategory = asyncHandler(async (_req, res) => {
    const categories = await categoryService.getAllCategory();
    return succesResponse(res, "Categories fetched successfully", categories, 200);
});
export const getCategoryById = asyncHandler(async (req, res) => {
    const categories = await categoryService.getCategoryById(req.params.id);
    return succesResponse(res, "Category fetched successfully", categories, 200);
});
export const createCategory = asyncHandler(async (req, res) => {
    const categories = await categoryService.createCategory(req.body);
    return succesResponse(res, "Category created successfully", categories, 201);
});
export const updateCategory = asyncHandler(async (req, res) => {
    const categories = await categoryService.updateCategory(req.params.id, req.body);
    return succesResponse(res, "Category updated successfully", categories, 200);
});
export const deleteCategory = asyncHandler(async (req, res) => {
    const categories = await categoryService.deleteCategory(req.params.id);
    return succesResponse(res, "Category deleted successfully", categories, 200);
});
export const searchCategories = asyncHandler(async (req, res) => {
    const name = req.query.name;
    const categories = await categoryService.searchCategories(name);
    return succesResponse(res, "Categories fetched successfully", categories, 200);
});
//# sourceMappingURL=category.controller.js.map
