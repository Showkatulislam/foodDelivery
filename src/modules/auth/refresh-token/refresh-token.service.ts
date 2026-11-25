import { AppError } from "../../../shared/errors/app-error.js";
import { hashRefreshToken } from "../../../shared/utils/refresh-token.js";
import type { IRefreshTokenRepository } from "./refresh-token.repository.interface.js";

export class RefreshTokenService {
    constructor(private readonly refreshTokenRepository: IRefreshTokenRepository) {}

    public async save(userId: string, refreshToken: string, expiresAt: Date): Promise<void> {
        const tokenHash = hashRefreshToken(refreshToken);

        await this.refreshTokenRepository.create(userId, tokenHash, expiresAt);
    }
    public async revoke(refreshToken: string): Promise<void> {
        const tokenHash = hashRefreshToken(refreshToken);

        const storedToken = await this.refreshTokenRepository.findByTokenHash(tokenHash);

        if (!storedToken || storedToken.revokedAt) {
            throw new AppError(
                "Refresh token is invalid or already revoked.",
                401,
                "INVALID_REFRESH_TOKEN",
            );
        }

        if (storedToken.expiresAt <= new Date()) {
            throw new AppError("Refresh token has expired.", 401, "REFRESH_TOKEN_EXPIRED");
        }
        await this.refreshTokenRepository.revoke(storedToken.id);
    }
}
