import { Router } from "express";
import { validate } from "../../shared/middleware/validation.middleware.js";
import { registerSchema } from "./validators/register.schema.js";
import { authController } from "./auth.module.js";
import { catchAsync } from "../../shared/middleware/catch-async.js";
import { loginSchema } from "./validators/login.schema.js";
import { authenticate } from "../../shared/middleware/auth.middleware.js";
import { authorize } from "../../shared/middleware/authorize.middleware.js";
import { UserRole } from "../../../generated/prisma/enums.js";
import { refreshTokenSchema } from "./validators/refresh-token.schema.js";
const router = Router();
router.post("/register", validate(registerSchema), catchAsync(authController.register));
router.post("/login", validate(loginSchema), catchAsync(authController.login));
router.get("/me", authenticate, catchAsync(authController.me));
router.get("/admin", authenticate, authorize(UserRole.ADMIN), catchAsync(authController.me));
router.post("/refresh", validate(refreshTokenSchema), catchAsync(authController.refresh));
export default router;
//# sourceMappingURL=auth.routes.js.map