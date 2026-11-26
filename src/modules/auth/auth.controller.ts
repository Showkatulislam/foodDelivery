import type { Request, Response } from "express";
import type { AuthService } from "./auth.service.js";
import type { IRegisterDTO } from "./dto/register.dto.js";
import { sendResponse } from "../../shared/utils/send-response.js";
import type { ILoginDTO } from "./dto/login.dto.js";
import type { AuthenticatedRequest } from "../../shared/middleware/auth.middleware.js";
import type { RefreshTokenService } from "./refresh-token/refresh-token.service.js";

export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly refreshTokenService: RefreshTokenService,
    ) {}

    public register = async (req: Request, res: Response): Promise<void> => {
        const data = req.body as IRegisterDTO;

        const user = await this.authService.register(data);

        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Account registered successfully.",
            data: user,
        });
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        const data = req.body as ILoginDTO;

        const result = await this.authService.Login(data);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Login successful.",
            data: result,
        });
    };

    public me = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Authenticated user retrieved successfully.",
            data: {
                userId: req.user?.sub,
                role: req.user?.role,
            },
        });
    };

    public refresh = async (req: Request, res: Response): Promise<void> => {
        const { refreshToken } = req.body as { refreshToken: string };

        const result = await this.refreshTokenService.refresh(refreshToken);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Token refresh successfully.",
            data: result,
        });
    };

    public logout = async (req: Request, res: Response): Promise<void> => {
        const { refreshToken } = req.body;

        await this.refreshTokenService.revoke(refreshToken);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Logged out successfully.",
        });
    };

    public logoutAll = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
        await this.refreshTokenService.revokeAll(req?.user?.sub as string);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Logout out from all sessions successfully.",
        });
    };
}
