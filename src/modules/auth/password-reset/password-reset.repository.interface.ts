import type { PasswordResetToken } from "../../../../generated/prisma/client.js";

export interface ICreatePasswordResetTokenPayload {
    userId: string;
    tokenHash: string;
    expiresAt: Date;
}

export interface IPasswordResetRepository {
    create(data: ICreatePasswordResetTokenPayload): Promise<PasswordResetToken>;

    findByTokenHash(tokenHash: string): Promise<PasswordResetToken | null>;

    revokeAllByUserId(userId: string): Promise<number>;

    consume(id: string): Promise<boolean>;

    completePasswordReset(tokenId: string, userId: string, passwordHash: string): Promise<boolean>;
}
