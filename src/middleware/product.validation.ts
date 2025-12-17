import type { Request, Response, NextFunction } from "express";
import { body, param, validationResult } from "express-validator";
import { errorResponse } from "../utils/response";

export const validate = (validations: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const error = validationResult(req);
    if (error.isEmpty()) return next();
    return errorResponse(res, "Validasi Gagal", 400, error.array());
  };
};

export const createProductValidation = [
  body("name").notEmpty().withMessage("Nama produk harus diisi"),
  body("price").notEmpty().withMessage("Harga produk harus diisi"),
  body("stock").notEmpty().withMessage("Stok produk harus diisi"),

  body("storeId").notEmpty().withMessage("ID toko harus diisi"),
  body("storeId").isUUID().withMessage("ID toko harus berupa UUID"),

  body("categoryId").notEmpty().withMessage("ID kategori harus diisi"),
  body("categoryId").isUUID().withMessage("ID kategori harus berupa UUID"),
];

export const getProductValidation = [
  param("id").notEmpty().withMessage("ID produk harus diisi"),
  param("id").isUUID().withMessage("ID produk harus berupa UUID"),
];

export const deleteProductValidation = [
  param("id").notEmpty().withMessage("ID produk harus diisi"),
  param("id").isUUID().withMessage("ID produk harus berupa UUID"),
];

export const updateProductValidation = [
  param("id").notEmpty().withMessage("ID produk harus diisi"),
  param("id").isUUID().withMessage("ID produk harus berupa UUID"),
];
