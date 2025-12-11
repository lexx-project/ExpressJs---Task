import { errorResponse } from "../utils/response.js";
export const errorHandler = (err, _req, res, _next) => {
    console.log("ERROR:", err.message);
    const statusCode = err.message.includes("tidak ditemukan") ? 404 : 400;
    errorResponse(res, err.message || "Server Error", statusCode);
};
//# sourceMappingURL=error.handler.js.map
