import { sendResponse } from "../../shared/utils/send-response.js";
export class AuthController {
    authService;
    refreshTokenService;
    constructor(authService, refreshTokenService) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
    }
    register = async (req, res) => {
        const data = req.body;
        const user = await this.authService.register(data);
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Account registered successfully.",
            data: user,
        });
    };
    login = async (req, res) => {
        const data = req.body;
        const result = await this.authService.Login(data);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Login successful.",
            data: result,
        });
    };
    me = async (req, res) => {
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
    refresh = async (req, res) => {
        const { refreshToken } = req.body;
        const result = await this.refreshTokenService.refresh(refreshToken);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Token refresh successfully.",
            data: result,
        });
    };
}
//# sourceMappingURL=auth.controller.js.map