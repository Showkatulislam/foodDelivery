import { AppError } from "../../shared/errors/app-error.js";
import { hashPassword, verifyPassword } from "../../shared/utils/password.js";
import { generateRefreshToken } from "../../shared/utils/refresh-token.js";
export class AuthService {
    authRepository;
    tokenService;
    refreshTokenService;
    constructor(authRepository, tokenService, refreshTokenService) {
        this.authRepository = authRepository;
        this.tokenService = tokenService;
        this.refreshTokenService = refreshTokenService;
    }
    async register(data) {
        const existingUser = await this.authRepository.findByEmail(data.email);
        if (existingUser) {
            throw new AppError("An account with this email already exist.", 409, "EMEAIL_ALREADY_EXISTS");
        }
        const passwordHash = await hashPassword(data.password);
        const user = await this.authRepository.createUser({
            ...data,
            passwordHash,
        });
        const { passwordHash: _, ...safeUser } = user;
        return safeUser;
    }
    async Login(data) {
        const user = await this.authRepository.findByEmail(data.email);
        if (!user) {
            throw new AppError("Invalid email or password", 401, "INVALID_CREDENTIALS");
        }
        if (!user.isActive) {
            throw new AppError("Your account is inactive.", 403, "ACCOUNT_INACTIVE");
        }
        const isPasswordValid = await verifyPassword(data.password, user.passwordHash);
        if (!isPasswordValid) {
            throw new AppError("Invalid email or password.", 401, "INVALID_CREDENTIALS");
        }
        const accessToken = this.tokenService.generateAccessToken(user);
        const refreshToken = generateRefreshToken();
        const refreshTokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const familyId = crypto.randomUUID();
        await this.refreshTokenService.save(user.id, refreshToken, refreshTokenExpiresAt, familyId);
        const { passwordHash: _, ...safeUser } = user;
        return {
            user: safeUser,
            accessToken,
            refreshToken,
        };
    }
}
//# sourceMappingURL=auth.service.js.map