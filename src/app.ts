import "./config/env.js";
import express, { type Express } from "express";
import { errorHandler } from "./shared/middleware/error.middleware.js";

export const app: Express = express();

app.use(express.json());

app.use(errorHandler);
