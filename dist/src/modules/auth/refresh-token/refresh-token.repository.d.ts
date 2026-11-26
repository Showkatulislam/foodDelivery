import type { RefreshToken } from "../../../../generated/prisma/client.js";
import type { ICreateRefreshTokenPayload, IRefreshTokenRepository, IRotateRefreshTokenPayload } from "./refresh-token.repository.interface.js";
export declare class RefreshTokenRepository implements IRefreshTokenRepository {
    create(data: ICreateRefreshTokenPayload): Promise<RefreshToken>;
    findByTokenHash(tokenHash: string): Promise<RefreshToken | null>;
    revoke(id: string): Promise<RefreshToken>;
    revokedAllByUserId(userId: string): Promise<number>;
    rotate(data: IRotateRefreshTokenPayload): Promise<RefreshToken | null>;
    revokeFamily(familyId: string): Promise<number>;
}
