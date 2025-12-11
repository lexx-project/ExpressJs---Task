import { asyncHandler } from "../utils/async.handler.js";
import * as ProductServices from "../services/product.service.js";
import { succesResponse } from "../utils/response.js";
export const getAllProduct = asyncHandler(async (_req, res) => {
    console.log("getAllProduct controller called");
    const products = await ProductServices.getAllProduct();
    succesResponse(res, "Products fetched successfully", products, 200);
});
export const createProduct = asyncHandler(async (req, res) => {
    const product = await ProductServices.createProduct(req.body);
    succesResponse(res, "Product created successfully", product, 201);
});
export const getProductById = asyncHandler(async (req, res) => {
    const product = await ProductServices.getProductById(Number(req.params.id));
    succesResponse(res, "Product fetched successfully", product, 200);
});
export const updateProduct = asyncHandler(async (req, res) => {
    const product = await ProductServices.updateProduct(Number(req.params.id), req.body);
    succesResponse(res, "Product updated successfully", product, 200);
});
export const deleteProduct = asyncHandler(async (req, res) => {
    const product = await ProductServices.deleteProduct(Number(req.params.id));
    succesResponse(res, "Product deleted successfully", product, 200);
});
//# sourceMappingURL=product.controller.js.map
