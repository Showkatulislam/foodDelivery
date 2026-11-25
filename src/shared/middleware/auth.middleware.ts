import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import { AppError } from "../errors/app-error.js";

export interface AuthenticatedRequest extends Request {
    user?: {
        sub: string;
        role: string;
    };
}

export const authenticate = (
    req: AuthenticatedRequest,
    _res: Response,
    next: NextFunction,
): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(
            new AppError("Authentication token is required.", 401, "AUTHENTICATION_REQUIRED"),
        );
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return next(new AppError("Invalid authentication token.", 401, "INVALID_TOKEN"));
    }

    try {
        const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);

        if (typeof decoded === "string" || !decoded.sub || !decoded.role) {
            return next(new AppError("Invalid authentication token.", 401, "INVALID_TOKEN"));
        }

        req.user = {
            sub: decoded.sub,
            role: String(decoded.role),
        };

        next();
    } catch {
        next(new AppError("Invalid or expired authentication token.", 401, "INVALID_TOKEN"));
    }
};
