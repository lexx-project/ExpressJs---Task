import { asyncHandler } from "../utils/async.handler";
import type { Request, Response } from "express";
import * as ProductServices from "../services/product.service";
import { succesResponse } from "../utils/response";

const transformProductImage = (product: any) => {
  if (product && product.image) {
    return {
      ...product,
      image: `/uploads/${product.image}`,
    };
  }
  return product;
};

export const getAllProduct = asyncHandler(
  async (_req: Request, res: Response) => {
    const products = await ProductServices.getAllProduct();
    const transformedProducts = products.map(transformProductImage);
    succesResponse(
      res,
      "Products fetched successfully",
      transformedProducts,
      200
    );
  }
);

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description, price, stock, storeId, categoryId } = req.body;
    const product = await ProductServices.createProduct({
      name,
      description,
      price: parseFloat(price),
      stock: parseInt(stock),
      image: req.file?.filename,
      storeId,
      categoryId,
    });
    const transformedProduct = transformProductImage(product);
    succesResponse(
      res,
      "Product created successfully",
      transformedProduct,
      201
    );
  }
);

export const getProductById = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await ProductServices.getProductById(req.params.id);
    const transformedProduct = transformProductImage(product);
    succesResponse(
      res,
      "Product fetched successfully",
      transformedProduct,
      200
    );
  }
);

export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description, price, stock, storeId, categoryId } = req.body;
    const updateData: any = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (price) updateData.price = parseFloat(price);
    if (stock) updateData.stock = parseInt(stock);
    if (req.file) updateData.image = req.file.filename;
    if (storeId) updateData.storeId = storeId;
    if (categoryId) updateData.categoryId = categoryId;

    const product = await ProductServices.updateProduct(
      req.params.id,
      updateData
    );
    const transformedProduct = transformProductImage(product);
    succesResponse(
      res,
      "Product updated successfully",
      transformedProduct,
      200
    );
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await ProductServices.deleteProduct(req.params.id);
    succesResponse(res, "Product deleted successfully", product, 200);
  }
);
