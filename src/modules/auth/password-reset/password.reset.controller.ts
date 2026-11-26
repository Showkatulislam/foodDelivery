import type { Request, Response } from "express";
import type { PasswordResetService } from "./password-reset.service.js";
import type { IResetPasswordDTO } from "./dto/reset-password.dto.js";
import { sendResponse } from "../../../shared/utils/send-response.js";
import type { IForgotPasswordDTO } from "./dto/forget-password.dto.js";

export class PasswordResetController {
    constructor(private readonly passwordResetService: PasswordResetService) {}

    public forgotPassword = async (
        req: Request<IForgotPasswordDTO>,
        res: Response,
    ): Promise<void> => {
        await this.passwordResetService.forgotPassword(req.body.email);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "If the email exists, a password reset link will be sent.",
        });
    };

    public resetPassword = async (
        req: Request<IResetPasswordDTO>,
        res: Response,
    ): Promise<void> => {
        await this.passwordResetService.resetPassword(req.body);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Password has been reset successfully.",
        });
    };
}
