import { Router } from "express";
import { passwordResetController } from "./password-reset.module.js";
import { resetPasswordSchema } from "./validators/reset-password.schema.js";
import { validate } from "../../../middlewares/validation.middleware.js";
import { forgotPasswordSchema } from "./validators/forget-password.schema.js";

const router = Router();

router.post(
    "/forgot-password",
    validate(forgotPasswordSchema),
    passwordResetController.forgotPassword,
);

router.post(
    "/reset-password",
    validate(resetPasswordSchema),
    passwordResetController.resetPassword,
);

export default router;
