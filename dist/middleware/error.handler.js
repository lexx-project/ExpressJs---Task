import { Prisma } from "../generated/client.js";
export const errorHandler = (err, _req, res, _next) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            return res.status(400).json({
                success: false,
                message: "Duplicate entry",
                field: err.meta?.target
            });
        }
        if (err.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Not found"
            });
        }
    }
    res.status(500).json({
        success: false,
        message: err.message
    });
};
//# sourceMappingURL=error.handler.js.map
