import type { RefreshToken } from "../../../../generated/prisma/client.js";
import { prisma } from "../../../infrastructure/database/prisma.js";
import type { IRefreshTokenRepository } from "./refresh-token.repository.interface.js";

export class RefreshTokenRepository implements IRefreshTokenRepository {
    public async create(userId: string, tokenHash: string, expiresAt: Date): Promise<RefreshToken> {
        return prisma.refreshToken.create({
            data: {
                userId,
                tokenHash,
                expiresAt,
            },
        });
    }

    public async findByTokenHash(tokenHash: string): Promise<RefreshToken | null> {
        return prisma.refreshToken.findUnique({
            where: { tokenHash },
        });
    }

    public async revoke(id: string): Promise<RefreshToken> {
        return prisma.refreshToken.update({
            where: { id },
            data: {
                revokedAt: new Date(),
            },
        });
    }

    public async revokedAllByUserId(userId: string): Promise<number> {
        const result = await prisma.refreshToken.updateMany({
            where: {
                userId,
                revokedAt: null,
            },
            data: {
                revokedAt: new Date(),
            },
        });
        return result.count;
    }
}
