import type { Request, Response, NextFunction } from "express";
import { AppError } from "../shared/errors/app-error.js";
import { authRepository } from "../modules/auth/auth.repository.js";
import { tokenService } from "../modules/auth/token.service.js";

export const authenticate = async (
    req: Request,
    _res: Response,
    next: NextFunction,
): Promise<void> => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next(
            new AppError("Authentication token is required.", 401, "AUTHENTICATION_REQUIRED"),
        );
    }

    const [scheme, token, ...extraParts] = authHeader.trim().split(/\s+/);

    if (scheme?.toLowerCase() !== "bearer" || !token || extraParts.length > 0) {
        return next(new AppError("Invalid authorization header.", 401, "INVALID_TOKEN"));
    }

    let userId: string;

    try {
        userId = tokenService.verifyAccessToken(token);
    } catch (error) {
        return next(error);
    }

    try {
        const user = await authRepository.findById(userId);

        if (!user || !user.isActive) {
            return next(
                new AppError(
                    "Your account is inactive or no longer exists.",
                    401,
                    "ACCOUNT_INACTIVE",
                ),
            );
        }

        req.user = {
            sub: user.id,
            role: user.role,
        };

        next();
    } catch (error) {
        next(error);
    }
};
