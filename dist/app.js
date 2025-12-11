import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import productRoutes from "./routes/product.route.js";
import { errorHandler } from "./middleware/error.handler.js";
import categoryRoutes from "./routes/category.route.js";
import storeRoutes from "./routes/store.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
console.log("Product Routes Type:", typeof productRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", storeRoutes);
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map
