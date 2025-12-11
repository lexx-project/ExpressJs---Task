import { body, param } from "express-validator";
export const createCategoryValidation = [
    body("name").notEmpty().withMessage("Nama kategori harus diisi"),
];
export const updateCategoryValidation = [
    param('id').notEmpty().withMessage("ID kategori harus diisi"),
    param('id').isNumeric().withMessage("ID kategori harus berupa angka"),
    body("name").notEmpty().withMessage("Nama kategori harus diisi"),
];
//# sourceMappingURL=category.validation.js.map