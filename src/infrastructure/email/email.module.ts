import { EmailService } from "./email.service.js";

export const emailService = new EmailService();

if (process.env.NODE_ENV === "development") {
    emailService
        .verifyConnection()
        .then(() => {
            console.log("SMTP connection successful.");
        })
        .catch((error: unknown) => {
            console.error("SMTP connection failed:", error);
        });
}
