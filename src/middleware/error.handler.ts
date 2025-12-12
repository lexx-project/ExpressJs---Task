import type { Request, Response, NextFunction } from "express"
import { errorResponse } from "../utils/response"
import { Prisma } from "../generated/client"

export const errorHandler = (err: any, _req: Request,res: Response, _next: NextFunction) => {
    if(err instanceof Prisma.PrismaClientKnownRequestError) {
        if(err.code === "P2002") {
            return res.status(400).json({
                success: false,
                message: "Duplicate entry",
                field: err.meta?.target
            })
        }   
        if(err.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Not found"
            })
        }
    }
    res.status(500).json({
        success: false,
        message: err.message
    })
}

