import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import productRoutes from "./routes/product.route";
import { errorHandler } from "./middleware/error.handler";
import categoryRoutes from "./routes/category.route";
import storeRoutes from "./routes/store.route";
import transactionRoutes from "./routes/transaction.route";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
console.log("Product Routes Type:", typeof productRoutes);

app.use("/api/v1", productRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", storeRoutes);
app.use("/api/v1", transactionRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);

app.use(errorHandler);

export default app;
