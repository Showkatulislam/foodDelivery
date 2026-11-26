import { AppError } from "../../../shared/errors/app-error.js";
import { generateRefreshToken, hashRefreshToken } from "../../../shared/utils/refresh-token.js";
import { authRepository } from "../auth.repository.js";
import { tokenService } from "../token.service.js";
import type {
    ICreateRefreshTokenPayload,
    IRefreshTokenRepository,
} from "./refresh-token.repository.interface.js";

export class RefreshTokenService {
    constructor(private readonly refreshTokenRepository: IRefreshTokenRepository) {}

    private getExpiresAt(): Date {
        return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    }

    public async save(
        userId: string,
        refreshToken: string,
        expiresAt: Date,
        familyId: string = crypto.randomUUID(),
    ): Promise<void> {
        const tokenHash = hashRefreshToken(refreshToken);

        await this.refreshTokenRepository.create({
            userId,
            tokenHash,
            familyId,
            expiresAt,
        });
    }
    public async refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }> {
        const tokenHash = hashRefreshToken(refreshToken);

        const storedToken = await this.refreshTokenRepository.findByTokenHash(tokenHash);

        if (!storedToken) {
            throw new AppError(
                "Refresh token is invalid or already revoked.",
                401,
                "INVALID_REFRESH_TOKEN",
            );
        }

        if (storedToken.revokedAt) {
            await this.refreshTokenRepository.revokeFamily(storedToken.familyId);

            throw new AppError(
                "Refresh token reuse detected.Please login again",
                401,
                "REFRESH_TOKEN_REUSE_DETECTED.",
            );
        }

        if (storedToken.expiresAt <= new Date()) {
            throw new AppError("Refresh token has expired.", 401, "REFRESH_TOKEN_EXPIRED");
        }

        const user = await authRepository.findById(storedToken.userId);

        if (!user || !user.isActive) {
            await this.refreshTokenRepository.revokeFamily(storedToken.familyId);
            throw new AppError("Your account is inactive or unavailable", 401, "ACCOUNT_INACTIVE");
        }

        const newRefreshToken = generateRefreshToken();
        const newTokenHash = hashRefreshToken(newRefreshToken);

        const newTokenPayload: ICreateRefreshTokenPayload = {
            userId: storedToken.userId,
            tokenHash: newTokenHash,
            familyId: storedToken.familyId,
            expiresAt: this.getExpiresAt(),
        };

        const rotatedToken = await this.refreshTokenRepository.rotate({
            currentTokenId: storedToken.id,
            newToken: newTokenPayload,
        });

        if (!rotatedToken) {
            const latestToken = await this.refreshTokenRepository.findByTokenHash(tokenHash);
            if (latestToken?.revokedAt) {
                await this.refreshTokenRepository.revokeFamily(latestToken.familyId);
                throw new AppError(
                    "Refresh token reuse detected. Please login again.",
                    401,
                    "REFRESH_TOKEN_REUSE_DETECTED",
                );
            }
            throw new AppError(
                "Refresh token is invalid or expired.",
                401,
                "INVALID_REFRESH_TOKEN",
            );
        }

        const accessToken = tokenService.generateAccessToken(user);

        return {
            accessToken,
            refreshToken: newRefreshToken,
        };
    }
}
