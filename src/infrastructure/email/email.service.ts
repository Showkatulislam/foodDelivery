import nodemailer from "nodemailer";
import type { IEmailService } from "./email-service.interface.js";
import { env } from "../../config/env.js";
import { AppError } from "../../shared/errors/app-error.js";

export class EmailService implements IEmailService {
    private readonly transporter = nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: env.SMTP_PORT === 465,
        auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASSWORD,
        },
    });

    public async sendPasswordResetEmail(email: string, resetUrl: string): Promise<void> {
        try {
            await this.transporter.sendMail({
                from: env.SMTP_FROM,
                to: email,
                subject: "Reset your password",
                text: `Use this link to reset your password: ${resetUrl}. This link expires in 15 minutes.`,
                html: `
                    <div>
                        <h1>Password Reset</h1>
                        <p>We received a request to reset your password.</p>
                        <p>
                            <a href="${resetUrl}">Reset Password</a>
                        </p>
                        <p>This link expires in 15 minutes.</p>
                        <p>If you did not request this, you can ignore this email.</p>
                    </div>
                `,
            });
        } catch {
            throw new AppError(
                "Unable to send password reset email.",
                500,
                "EMAIL_DELIVERY_FAILED",
            );
        }
    }

    // Add this method here.
    public async verifyConnection(): Promise<boolean> {
        return this.transporter.verify();
    }
}
