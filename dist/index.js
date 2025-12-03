import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { body, param, query, validationResult, } from "express-validator";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
let products = [
    {
        id: 1,
        nama: "Laptop Gaming",
        deskripsi: "Intel i7, RTX 3060",
        harga: 15000000,
    },
    {
        id: 2,
        nama: "Keyboard Mekanikal",
        deskripsi: "Blue Switch, RGB",
        harga: 800000,
    },
    {
        id: 3,
        nama: "Mouse Wireless",
        deskripsi: "Ergonomic, Silent Click",
        harga: 300000,
    },
];
const successResponse = (res, message, data = null, pagination = null, statusCode = 200, req) => {
    const response = {
        success: true,
        message,
    };
    if (data !== null)
        response.data = data;
    if (pagination)
        response.pagination = pagination;
    if (req?.startTime) {
        response.meta = { durationMs: Date.now() - req.startTime };
    }
    return res.status(statusCode).json(response);
};
const errorResponse = (res, message, statusCode = 400, errors = null, req) => {
    const response = {
        success: false,
        message,
    };
    if (errors)
        response.errors = errors;
    if (req?.startTime) {
        response.meta = { durationMs: Date.now() - req.startTime };
    }
    return res.status(statusCode).json(response);
};
const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        const errorList = errors.array().map((err) => ({
            field: err.type === "field" ? err.path : "unknown",
            message: err.msg,
        }));
        return errorResponse(res, "Validasi gagal", 400, errorList, req);
    };
};
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
const createProductValidation = [
    body("nama")
        .trim()
        .notEmpty()
        .withMessage("Nama produk wajib diisi")
        .isLength({ min: 3 })
        .withMessage("Nama produk minimal 3 karakter"),
    body("deskripsi").trim().notEmpty().withMessage("Deskripsi wajib diisi"),
    body("harga")
        .isNumeric()
        .withMessage("Harga harus angka")
        .custom((value) => value > 0)
        .withMessage("Harga harus lebih dari 0"),
];
const getProductByIdValidation = [
    param("id").isNumeric().withMessage("ID harus angka"),
];
const listProductQueryValidation = [
    query("page")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Page harus lebih atau sama dengan 1"),
    query("limit")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Limit harus lebih atau sama dengan 1"),
];
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use((req, _res, next) => {
    console.log(`Request masuk: ${req.method} ${req.path}`);
    req.startTime = Date.now();
    next();
});
app.use((req, _res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        const err = new Error("Header X-API-Key wajib diisi untuk akses API!");
        err.statusCode = 401;
        throw err;
    }
    if (apiKey !== "secret-api-key-123") {
        const err = new Error("API Key tidak valid!");
        err.statusCode = 403;
        throw err;
    }
    next();
});
app.get("/", (req, res) => {
    successResponse(res, "API E-Commerce – Hari 4", {
        hari: 4,
        status: "Server hidup!",
        waktuProses: `${Date.now() - (req.startTime || Date.now())}ms`,
    }, null, 200, req);
});
app.get("/api/products", validate(listProductQueryValidation), (req, res) => {
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const limit = req.query.limit
        ? parseInt(req.query.limit, 10)
        : products.length;
    const start = (page - 1) * limit;
    const pagedProducts = products.slice(start, start + limit);
    successResponse(res, "Daftar produk", pagedProducts, { page, limit, total: products.length }, 200, req);
});
app.get("/api/products/:id", validate(getProductByIdValidation), (req, res) => {
    const id = parseInt(req.params.id, 10);
    const product = products.find((p) => p.id === id);
    if (!product) {
        const err = new Error("Produk dengan ID tersebut tidak ditemukan");
        err.statusCode = 404;
        throw err;
    }
    successResponse(res, "Produk ditemukan", product, null, 200, req);
});
app.post("/api/products", validate(createProductValidation), (req, res) => {
    const { nama, deskripsi, harga } = req.body;
    const newProduct = {
        id: products.length + 1,
        nama,
        deskripsi,
        harga: Number(harga),
    };
    products.push(newProduct);
    successResponse(res, "Produk berhasil ditambahkan", newProduct, null, 201, req);
});
app.put("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
        const err = new Error("Produk tidak ditemukan");
        err.statusCode = 404;
        throw err;
    }
    products[index] = { ...products[index], ...req.body };
    successResponse(res, "Produk berhasil diupdate", products[index], null, 200, req);
});
app.delete("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
        const err = new Error("Produk tidak ditemukan");
        err.statusCode = 404;
        throw err;
    }
    const deletedProduct = products.splice(index, 1);
    successResponse(res, "Produk berhasil dihapus", deletedProduct[0], null, 200, req);
});
app.get("/api/error-test", () => {
    throw new Error("Ini error contoh untuk testing handler");
});
app.get("/api/async-test", asyncHandler(async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    successResponse(res, "Async berhasil!", null, null, 200, req);
}));
app.use((req) => {
    const err = new Error(`Route ${req.originalUrl} tidak ada di API E-Commerce`);
    err.statusCode = 404;
    throw err;
});
app.use((err, req, res, _next) => {
    console.error("ERROR:", err.message);
    const statusCode = err.statusCode ||
        (err.message.includes("tidak ditemukan") ||
            err.message.includes("tidak ada")
            ? 404
            : 400);
    const errors = process.env.NODE_ENV === "development" && err.stack
        ? { stack: err.stack }
        : null;
    return errorResponse(res, err.message || "Terjadi kesalahan server", statusCode, errors, req);
});
app.listen(PORT, () => {
    console.log(`Server E-Commerce HARI 4 jalan di http://localhost:${PORT}`);
    console.log(`Jangan lupa kirim header: X-API-Key: secret-api-key-123`);
});
