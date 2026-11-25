import { AuthController } from "./auth.controller.js";
import { authRepository } from "./auth.repository.js";
import { AuthService } from "./auth.service.js";
import { tokenService } from "./token.service.js";

const authService = new AuthService(authRepository, tokenService);

export const authController = new AuthController(authService);
