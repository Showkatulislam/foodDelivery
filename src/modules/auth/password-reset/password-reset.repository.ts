import type { PasswordResetToken } from "../../../../generated/prisma/client.js";
import { prisma } from "../../../infrastructure/database/prisma.js";
import type {
    ICreatePasswordResetTokenPayload,
    IPasswordResetRepository,
} from "./password-reset.repository.interface.js";

export class PasswordResetRepository implements IPasswordResetRepository {
    //	Store a new reset token hash
    public async create(data: ICreatePasswordResetTokenPayload): Promise<PasswordResetToken> {
        return prisma.passwordResetToken.create({ data });
    }

    //Find reset token record
    public async findByTokenHash(tokenHash: string): Promise<PasswordResetToken | null> {
        return prisma.passwordResetToken.findUnique({
            where: { tokenHash },
        });
    }
    // Consume all unused tokens for a user
    public async revokeAllByUserId(userId: string): Promise<number> {
        const result = await prisma.passwordResetToken.updateMany({
            where: {
                userId,
                usedAt: null,
            },
            data: {
                usedAt: new Date(),
            },
        });
        return result.count;
    }
    //Atomically consume one valid token
    public async consume(id: string): Promise<boolean> {
        const result = await prisma.passwordResetToken.updateMany({
            where: {
                id,
                usedAt: null,
                expiresAt: {
                    gt: new Date(),
                },
            },
            data: {
                usedAt: new Date(),
            },
        });
        return result.count === 1;
    }

    public async completePasswordReset(
        tokenId: string,
        userId: string,
        passwordHash: string,
    ): Promise<boolean> {
        return prisma.$transaction(async (tx) => {
            const consumedToken = await tx.passwordResetToken.updateMany({
                where: {
                    id: tokenId,
                    userId,
                    usedAt: null,
                    expiresAt: { gt: new Date() },
                },
                data: {
                    usedAt: new Date(),
                },
            });

            if (consumedToken.count !== 1) {
                return false;
            }

            await tx.user.update({
                where: { id: userId },
                data: { passwordHash },
            });

            await tx.refreshToken.updateMany({
                where: {
                    userId,
                    revokedAt: null,
                },
                data: {
                    revokedAt: new Date(),
                },
            });
            return true;
        });
    }
}
