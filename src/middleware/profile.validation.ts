import { body, param } from "express-validator";

export const createProfileValidation = [
  body("userId").notEmpty().withMessage("User ID harus diisi"),
  body("userId").isUUID().withMessage("User ID harus berupa UUID"),
  body("name").notEmpty().withMessage("Nama profile harus diisi"),
  body("gender").notEmpty().withMessage("Gender profile harus diisi"),
  body("address").notEmpty().withMessage("Alamat profile harus diisi"),
];

export const updateProfileValidation = [
  param("id").notEmpty().withMessage("ID profile harus diisi"),
  param("id").isUUID().withMessage("ID profile harus berupa UUID"),

  body("name").optional().notEmpty().withMessage("Nama profile harus diisi"),
  body("gender")
    .optional()
    .notEmpty()
    .withMessage("Gender profile harus diisi"),
  body("address")
    .optional()
    .notEmpty()
    .withMessage("Alamat profile harus diisi"),
];

export const deleteProfileValidation = [
  param("id").notEmpty().withMessage("ID profile harus diisi"),
  param("id").isUUID().withMessage("ID profile harus berupa UUID"),
];

export const getProfileValidation = [
  param("id").notEmpty().withMessage("ID profile harus diisi"),
  param("id").isUUID().withMessage("ID profile harus berupa UUID"),
];
