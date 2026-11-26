import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../../generated/prisma/enums.js";

import { AppError } from "../shared/errors/app-error.js";

export const authorize = (...allowedRoles: UserRole[]) => {
    return (req: Request, _res: Response, next: NextFunction): void => {
        if (!req.user) {
            return next(
                new AppError("Authentication is required.", 401, "AUTHENTICATION_REQUIRED"),
            );
        }

        if (!allowedRoles.includes(req.user.role as UserRole)) {
            return next(
                new AppError(
                    "You do not have permission to access this resource.",
                    403,
                    "FORBIDDEN",
                ),
            );
        }
        next();
    };
};
