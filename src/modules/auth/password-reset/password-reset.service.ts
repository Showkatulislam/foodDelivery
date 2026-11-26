import { env } from "../../../config/env.js";
import type { IEmailService } from "../../../infrastructure/email/email-service.interface.js";
import { AppError } from "../../../shared/errors/app-error.js";
import {
    generatePasswordResetToken,
    hashPasswordResetToken,
} from "../../../shared/utils/password-reset-token.js";
import { hashPassword } from "../../../shared/utils/password.js";
import type { IAuthRepository } from "../auth.repository.interface.js";
import type { IResetPasswordDTO } from "./dto/reset-password.dto.js";
import type { IPasswordResetRepository } from "./password-reset.repository.interface.js";

export class PasswordResetService {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly passwordResetRepository: IPasswordResetRepository,
        private readonly emailService: IEmailService,
    ) {}

    public async forgotPassword(email: string): Promise<void> {
        const user = await this.authRepository.findByEmail(email);

        if (!user) {
            return;
        }

        const token = generatePasswordResetToken();
        const tokenHash = hashPasswordResetToken(token);
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

        await this.passwordResetRepository.revokeAllByUserId(user.id);

        await this.passwordResetRepository.create({
            userId: user.id,
            tokenHash,
            expiresAt,
        });

        const resetUrl = `${env.FRONTEND_URL}/reset-password?=token=${token}`;

        await this.emailService.sendPasswordResetEmail(user.email, resetUrl);
    }

    public async resetPassword(data: IResetPasswordDTO): Promise<void> {
        const tokenHash = hashPasswordResetToken(data.token);

        const resetToken = await this.passwordResetRepository.findByTokenHash(tokenHash);

        if (!resetToken || resetToken.usedAt !== null || resetToken.expiresAt <= new Date()) {
            throw new AppError(
                "Invalid or expired password reset token",
                400,
                "INVALIED_PASSWORD_RESET_TOKEN",
            );
        }

        const passwordHash = await hashPassword(data.newPassword);

        const isResetSuccessful = await this.passwordResetRepository.completePasswordReset(
            resetToken.id,
            resetToken.userId,
            passwordHash,
        );
        if (!isResetSuccessful) {
            throw new AppError(
                "Invalid or expired password reset token.",
                400,
                "INVALID_PASSWORD_RESET_TOKEN",
            );
        }
    }
}
