import { asyncHandler } from "../utils/async.handler.js";
import * as storeServices from "../services/store.service.js";
import { succesResponse } from "../utils/response.js";
export const getAllStore = asyncHandler(async (_req, res) => {
    const stores = await storeServices.getAllStore();
    return succesResponse(res, "Stores fetched successfully", stores, 200);
});
export const getStoreById = asyncHandler(async (req, res) => {
    const store = await storeServices.getStoreById(req.params.id);
    return succesResponse(res, "Store fetched successfully", store, 200);
});
export const createStore = asyncHandler(async (req, res) => {
    const store = await storeServices.createStore(req.body);
    return succesResponse(res, "Store created successfully", store, 201);
});
export const updateStore = asyncHandler(async (req, res) => {
    const store = await storeServices.updateStore(req.params.id, req.body);
    return succesResponse(res, "Store updated successfully", store, 200);
});
export const deleteStore = asyncHandler(async (req, res) => {
    const store = await storeServices.deleteStore(req.params.id);
    return succesResponse(res, "Store deleted successfully", store, 200);
});
//# sourceMappingURL=store.controller.js.map
