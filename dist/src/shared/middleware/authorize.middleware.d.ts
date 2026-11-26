import type { NextFunction, Response } from "express";
import type { UserRole } from "../../../generated/prisma/enums.js";
import type { AuthenticatedRequest } from "./auth.middleware.js";
export declare const authorize: (...allowedRoles: UserRole[]) => (req: AuthenticatedRequest, _res: Response, next: NextFunction) => void;
