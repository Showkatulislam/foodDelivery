import { env } from "../../../config/env.js";
import type { IEmailService } from "../../../shared/interface/email-service.interface.js";
import {
    generatePasswordResetToken,
    hashPasswordResetToken,
} from "../../../shared/utils/password-reset-token.js";
import type { IAuthRepository } from "../auth.repository.interface.js";
import type { IPasswordResetRepository } from "./password-reset.module.js";

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

        const resetUrl = `${env.FRONTEND}/reset-password?=token=${token}`;

        await this.emailService.sendPasswordResetEmail(user.email, resetUrl);
    }
}
