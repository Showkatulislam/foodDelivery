import type { IRefreshTokenRepository } from "./refresh-token.repository.interface.js";
export declare class RefreshTokenService {
    private readonly refreshTokenRepository;
    constructor(refreshTokenRepository: IRefreshTokenRepository);
    private getExpiresAt;
    save(userId: string, refreshToken: string, expiresAt: Date, familyId?: string): Promise<void>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
