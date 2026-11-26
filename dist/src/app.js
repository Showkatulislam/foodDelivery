import "./config/env.js";
import express from "express";
import { errorHandler } from "./shared/middleware/error.middleware.js";
import authRouter from "./modules/auth/auth.routes.js";
export const app = express();
app.use(express.json());
app.use(errorHandler);
app.get("/test", (req, res) => {
    res.status(201).json({
        message: "I am from testing route",
    });
});
app.use("/api/v1/auth", authRouter);
//# sourceMappingURL=app.js.map