import { asyncHandler } from "../utils/async.handler";
import { Request, Response } from "express";
import * as storeServices from "../services/store.service"
import { succesResponse } from "../utils/response";

export const getAllStore = asyncHandler(async(_req: Request, res: Response) => {
    const stores = await storeServices.getAllStore()
    return succesResponse(res, "Stores fetched successfully", stores, 200)
})

export const getStoreById = asyncHandler(async(req: Request, res: Response) => {
    const store = await storeServices.getStoreById(Number(req.params.id))
    return succesResponse(res, "Store fetched successfully", store, 200)
}) 

export const createStore = asyncHandler(async(req: Request, res: Response) => {
    const store = await storeServices.createStore(req.body)
    return succesResponse(res, "Store created successfully", store, 201)
})

export const updateStore = asyncHandler(async(req: Request, res: Response) => {
    const store = await storeServices.updateStore(Number(req.params.id), req.body)
    return succesResponse(res, "Store updated successfully", store, 200)
})

export const deleteStore = asyncHandler(async(req: Request, res: Response) => {
    const store = await storeServices.deleteStore(Number(req.params.id))
    return succesResponse(res, "Store deleted successfully", store, 200)
})  