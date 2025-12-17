import type { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import { asyncHandler } from "../utils/async.handler";
import { succesResponse } from "../utils/response";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const user = await AuthService.register(req.body);

  const { password, ...userWithoutPassword } = user;

  return succesResponse(
    res,
    "User registered successfully",
    userWithoutPassword
  );
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  return succesResponse(res, "User logged in successfully", result);
});
