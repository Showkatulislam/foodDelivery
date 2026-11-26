import type { RefreshToken } from "../../../../generated/prisma/client.js";
export interface ICreateRefreshTokenPayload {
    userId: string;
    tokenHash: string;
    familyId: string;
    expiresAt: Date;
}
export interface IRotateRefreshTokenPayload {
    currentTokenId: string;
    newToken: ICreateRefreshTokenPayload;
}
export interface IRefreshTokenRepository {
    create(data: ICreateRefreshTokenPayload): Promise<RefreshToken>;
    findByTokenHash(tokenHash: string): Promise<RefreshToken | null>;
    revoke(id: string): Promise<RefreshToken>;
    revokedAllByUserId(userId: string): Promise<number>;
    rotate(data: IRotateRefreshTokenPayload): Promise<RefreshToken | null>;
    revokeFamily(familyId: string): Promise<number>;
}
