import type { Request, Response } from "express";
import type { AuthService } from "./auth.service.js";
import type { IRegisterDTO } from "./dto/register.dto.js";
import { sendResponse } from "../../shared/utils/send-response.js";
import type { ILoginDTO } from "./dto/login.dto.js";
import type { AuthenticatedRequest } from "../../shared/middleware/auth.middleware.js";

export class AuthController {
    constructor(private readonly authService: AuthService) {}

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
}
