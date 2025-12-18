import type { Response } from "express";

export const succesResponse = (
  res: Response,
  message: string,
  data: any = null,
  statusCode = 200,
  pagination?: any
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    ...(pagination && { pagination }),
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 400,
  errors: any = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};
