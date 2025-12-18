import * as categoryService from "../services/category.service";
import { asyncHandler } from "../utils/async.handler";
import { succesResponse } from "../utils/response";
import type { Request, Response } from "express";

export const getAllCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search ? String(req.query.search) : undefined;
    const sortBy = req.query.sortBy ? String(req.query.sortBy) : undefined;
    const sortOrder = (req.query.sortOrder as "asc" | "desc") || "desc";

    const categories = await categoryService.getAllCategory({
      page,
      limit,
      search,
      sortBy,
      sortOrder,
    });
    return succesResponse(
      res,
      "Categories fetched successfully",
      categories.categories,
      200,
      {
        totalItems: categories.totalItems,
        totalPages: categories.totalPages,
        currentPage: categories.currentPage,
      }
    );
  }
);

export const getCategoryById = asyncHandler(
  async (req: Request, res: Response) => {
    const categories = await categoryService.getCategoryById(req.params.id);
    return succesResponse(
      res,
      "Category fetched successfully",
      categories,
      200
    );
  }
);

export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const categories = await categoryService.createCategory(req.body);
    return succesResponse(
      res,
      "Category created successfully",
      categories,
      201
    );
  }
);

export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const categories = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    return succesResponse(
      res,
      "Category updated successfully",
      categories,
      200
    );
  }
);

export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const categories = await categoryService.deleteCategory(req.params.id);
    return succesResponse(
      res,
      "Category deleted successfully",
      categories,
      200
    );
  }
);
