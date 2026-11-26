import { PasswordResetService } from "./password-reset.service.js";
import { authRepository } from "../auth.repository.js";

// We'll replace this with the actual email service when we implement it.
// import type { emailService } from "../../../infrastructure/email/email.module.js";
import { PasswordResetRepository } from "./password-reset.repository.js";
import { emailService } from "../../../infrastructure/email/email.module.js";
import { PasswordResetController } from "./password.reset.controller.js";

const passwordresetRepository = new PasswordResetRepository();

export const passwordResetService = new PasswordResetService(
    authRepository,
    passwordresetRepository,
    emailService,
);

export const passwordResetController = new PasswordResetController(passwordResetService);
