import { asyncHandler } from "../utils/async.handler";
import type { Request, Response } from "express";
import * as ProductServices from "../services/product.service";
import { succesResponse } from "../utils/response";

export const getAllProduct = asyncHandler(async(_req: Request, res: Response) => {
    console.log("getAllProduct controller called");
    const products = await ProductServices.getAllProduct();
   succesResponse(res, "Products fetched successfully", products, 200)
})

export const createProduct = asyncHandler(async(req: Request, res: Response) => {
    const product = await ProductServices.createProduct(req.body);
    succesResponse(res, "Product created successfully", product, 201)
})

export const getProductById = asyncHandler(async(req: Request, res: Response) => {
    const product = await ProductServices.getProductById(Number(req.params.id));
    succesResponse(res, "Product fetched successfully", product, 200)
})

export const updateProduct = asyncHandler(async(req: Request, res: Response) => {
    const product = await ProductServices.updateProduct(Number(req.params.id), req.body);
    succesResponse(res, "Product updated successfully", product, 200)
})

export const deleteProduct = asyncHandler(async(req: Request, res: Response) => {
    const product = await ProductServices.deleteProduct(Number(req.params.id));
    succesResponse(res, "Product deleted successfully", product, 200)
})

