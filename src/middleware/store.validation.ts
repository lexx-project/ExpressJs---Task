import { body, param } from "express-validator";

export const createStoreValidation = [

    body("name").notEmpty().withMessage("Nama toko harus diisi"),
    body("description").optional().isString().withMessage("Deskripsi toko harus berupa string"),
    body("location").optional().isString().withMessage("Lokasi toko harus berupa string")
]

export const updateStoreValidation = [
    param("id").notEmpty().withMessage("ID toko harus diisi"),
    param("id").isUUID().withMessage("ID toko harus berupa UUID"),
    body("name").notEmpty().withMessage("Nama toko harus diisi"),
    body("description").optional().isString().withMessage("Deskripsi toko harus berupa string"),
    body("location").optional().isString().withMessage("Lokasi toko harus berupa string")
]   