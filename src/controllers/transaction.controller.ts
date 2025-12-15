import { asyncHandler } from "../utils/async.handler";
import * as transactionService from '../services/transaction.service';
import type { Request, Response } from "express"
import { succesResponse } from "../utils/response";

export const checkout = asyncHandler(async (req: Request, res: Response) => {
    const { userId, items } = req.body
    const result =  await transactionService.checkout(userId, items)
    return succesResponse(res, "Transaction created successfully", result, 201)
})

export const getHistory = asyncHandler(async (req: Request, res: Response) => {
    const {userId} = req.params
    const history = await transactionService.getTransactionHistory(userId) 
    return succesResponse(res, "Transaction history fetched successfully", history, 200)
})

