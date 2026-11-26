import type { Request, Response } from "express";
import type { AuthService } from "./auth.service.js";
import type { AuthenticatedRequest } from "../../shared/middleware/auth.middleware.js";
import type { RefreshTokenService } from "./refresh-token/refresh-token.service.js";
export declare class AuthController {
    private readonly authService;
    private readonly refreshTokenService;
    constructor(authService: AuthService, refreshTokenService: RefreshTokenService);
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    me: (req: AuthenticatedRequest, res: Response) => Promise<void>;
    refresh: (req: Request, res: Response) => Promise<void>;
}
