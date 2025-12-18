import { asyncHandler } from "../utils/async.handler";
import { Request, Response } from "express";
import * as storeServices from "../services/store.service";
import { succesResponse } from "../utils/response";

export const getAllStore = asyncHandler(async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const search = req.query.search ? String(req.query.search) : undefined;
  const sortBy = req.query.sortBy ? String(req.query.sortBy) : undefined;
  const sortOrder = (req.query.sortOrder as "asc" | "desc") || "desc";

  const stores = await storeServices.getAllStore({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  });
  return succesResponse(
    res,
    "Stores fetched successfully",
    stores.stores,
    200,
    {
      totalItems: stores.totalItems,
      totalPages: stores.totalPages,
      currentPage: stores.currentPage,
    }
  );
});

export const getStoreById = asyncHandler(
  async (req: Request, res: Response) => {
    const store = await storeServices.getStoreById(req.params.id);
    return succesResponse(res, "Store fetched successfully", store, 200);
  }
);

export const createStore = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return res
      .status(401)
      .json({ success: false, message: "User not authenticated" });
  }
  const store = await storeServices.createStore(req.body, req.user.id);
  return succesResponse(res, "Store created successfully", store, 201);
});

export const updateStore = asyncHandler(async (req: Request, res: Response) => {
  const store = await storeServices.updateStore(req.params.id, req.body);
  return succesResponse(res, "Store updated successfully", store, 200);
});

export const deleteStore = asyncHandler(async (req: Request, res: Response) => {
  const store = await storeServices.deleteStore(req.params.id);
  return succesResponse(res, "Store deleted successfully", store, 200);
});
