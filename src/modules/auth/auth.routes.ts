import { Router } from "express";
import { validate } from "../../middlewares/validation.middleware.js";
import { registerSchema } from "./validators/register.schema.js";
import { authController } from "./auth.module.js";
import { catchAsync } from "../../middlewares/catch-async.js";
import { loginSchema } from "./validators/login.schema.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/authorize.middleware.js";
import { UserRole } from "../../../generated/prisma/enums.js";
import { refreshTokenSchema } from "./validators/refresh-token.schema.js";
import { logoutSchema } from "./validators/logout.schema.js";
import passwordResetRoutes from "../auth/password-reset/password-reset.route.js";

const router: Router = Router();

router.post("/register", validate(registerSchema), catchAsync(authController.register));

router.post("/login", validate(loginSchema), catchAsync(authController.login));

router.get("/me", authenticate, catchAsync(authController.me));

router.get("/admin", authenticate, authorize(UserRole.ADMIN), catchAsync(authController.me));

router.post("/refresh", validate(refreshTokenSchema), catchAsync(authController.refresh));

router.post("/logout", validate(logoutSchema), catchAsync(authController.logout));

router.post("/logout-all", authenticate, catchAsync(authController.logoutAll));

router.use(passwordResetRoutes);

export default router;
