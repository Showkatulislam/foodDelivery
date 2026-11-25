import type { User } from "../../../generated/prisma/client.js";
import { AppError } from "../../shared/errors/app-error.js";
import { hashPassword, verifyPassword } from "../../shared/utils/password.js";
import { generateRefreshToken } from "../../shared/utils/refresh-token.js";
import type { IAuthRepository } from "./auth.repository.interface.js";
import type { ILoginDTO } from "./dto/login.dto.js";
import type { IRegisterDTO } from "./dto/register.dto.js";
import type { RefreshTokenService } from "./refresh-token/refresh-token.service.js";
import type { TokenService } from "./token.service.js";

export class AuthService {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly tokenService: TokenService,
        private readonly refreshTokenService: RefreshTokenService,
    ) {}

    public async register(data: IRegisterDTO): Promise<Omit<User, "passwordHash">> {
        const existingUser = await this.authRepository.findByEmail(data.email);

        if (existingUser) {
            throw new AppError(
                "An account with this email already exist.",
                409,
                "EMEAIL_ALREADY_EXISTS",
            );
        }
        const passwordHash = await hashPassword(data.password);

        const user = await this.authRepository.createUser({
            ...data,
            passwordHash,
        });

        const { passwordHash: _, ...safeUser } = user;
        return safeUser;
    }

    public async Login(data: ILoginDTO): Promise<{
        user: Omit<User, "passwordHash">;
        accessToken: string;
        refreshToken: string;
    }> {
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

        await this.refreshTokenService.save(user.id, refreshToken, refreshTokenExpiresAt);

        const { passwordHash: _, ...safeUser } = user;

        return {
            user: safeUser,
            accessToken,
            refreshToken,
        };
    }
}
