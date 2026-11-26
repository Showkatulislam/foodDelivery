import { prisma } from "../../../infrastructure/database/prisma.js";
export class RefreshTokenRepository {
    async create(data) {
        return prisma.refreshToken.create({
            data,
        });
    }
    async findByTokenHash(tokenHash) {
        return prisma.refreshToken.findUnique({
            where: { tokenHash },
        });
    }
    async revoke(id) {
        return prisma.refreshToken.update({
            where: { id, revokedAt: null },
            data: {
                revokedAt: new Date(),
            },
        });
    }
    async revokedAllByUserId(userId) {
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
    async rotate(data) {
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
    async revokeFamily(familyId) {
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
//# sourceMappingURL=refresh-token.repository.js.map