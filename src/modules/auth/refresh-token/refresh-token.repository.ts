import type { RefreshToken } from "../../../../generated/prisma/client.js";
import { prisma } from "../../../infrastructure/database/prisma.js";
import type {
    ICreateRefreshTokenPayload,
    IRefreshTokenRepository,
    IRotateRefreshTokenPayload,
} from "./refresh-token.repository.interface.js";

export class RefreshTokenRepository implements IRefreshTokenRepository {
    public async create(data: ICreateRefreshTokenPayload): Promise<RefreshToken> {
        return prisma.refreshToken.create({
            data,
        });
    }

    public async findByTokenHash(tokenHash: string): Promise<RefreshToken | null> {
        return prisma.refreshToken.findUnique({
            where: { tokenHash },
        });
    }

    public async revoke(id: string): Promise<RefreshToken> {
        return prisma.refreshToken.update({
            where: { id, revokedAt: null },
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
    public async rotate(data: IRotateRefreshTokenPayload): Promise<RefreshToken | null> {
        return prisma.$transaction(async (tx) => {
            const now = new Date();
            const revokedToken = await tx.refreshToken.updateMany({
                where: {
                    id: data.currentTokenId,
                    revokedAt: null,
                    expiresAt: {
                        gt: now,
                    },
                },
                data: {
                    revokedAt: now,
                },
            });
            if (revokedToken.count !== 1) {
                return null;
            }

            const newToken = await tx.refreshToken.create({
                data: {
                    userId: data.newToken.userId,
                    tokenHash: data.newToken.tokenHash,
                    familyId: data.newToken.familyId,
                    expiresAt: data.newToken.expiresAt,
                },
            });

            await tx.refreshToken.update({
                where: {
                    id: data.currentTokenId,
                },
                data: {
                    replacedByTokenId: newToken.id,
                },
            });

            return newToken;
        });
    }

    public async revokeFamily(familyId: string): Promise<number> {
        const result = await prisma.refreshToken.updateMany({
            where: {
                familyId,
                revokedAt: null,
            },
            data: {
                revokedAt: new Date(),
            },
        });
        return result.count;
    }
}
