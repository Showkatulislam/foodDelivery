import { PasswordResetService } from "./password-reset.service.js";
import { authRepository } from "../auth.repository.js";

// We'll replace this with the actual email service when we implement it.
import type { emailService } from "../../../infrastructure/email/email.module.js";
import { PasswordResetRepository } from "./password-reset.repository.js";

const passwordresetRepository = new PasswordResetRepository();

export const passwordResetService = new PasswordResetService(
    authRepository,
    passwordresetRepository,
    emailService,
);
