import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import { AppError } from "../errors/app-error.js";
import type { UserRole } from "../../../generated/prisma/enums.js";
import { authRepository } from "../../modules/auth/auth.repository.js";

export interface AuthenticatedRequest extends Request {
    user?: {
        sub: string;
        role: UserRole;
    };
}

export const authenticate = async (
    req: AuthenticatedRequest,
    _res: Response,
    next: NextFunction,
): Promise<void> => {
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

        const user = await authRepository.findById(decoded.sub);

        if (!user || !user.isActive) {
            next(
                new AppError(
                    "Your account is inactive or no longer exists.",
                    401,
                    "ACCOUNT_INACTIVE",
                ),
            );
            return;
        }

        req.user = {
            sub: decoded.sub,
            role: decoded.role,
        };

        next();
    } catch {
        next(new AppError("Invalid or expired authentication token.", 401, "INVALID_TOKEN"));
    }
};
