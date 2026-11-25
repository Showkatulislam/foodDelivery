import { Router } from "express";
import { validate } from "../../shared/middleware/validation.middleware.js";
import { registerSchema } from "./validators/register.schema.js";
import { authController } from "./auth.module.js";
import { catchAsync } from "../../shared/middleware/catch-async.js";
import { loginSchema } from "./validators/login.schema.js";
import { authenticate } from "../../shared/middleware/auth.middleware.js";

const router: Router = Router();

router.post("/register", validate(registerSchema), catchAsync(authController.register));

router.post("/login", validate(loginSchema), catchAsync(authController.login));

router.get("/me", authenticate, catchAsync(authController.me));

export default router;
