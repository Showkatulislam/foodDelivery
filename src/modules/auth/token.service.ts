import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../../config/env.js";
import type { User } from "../../../generated/prisma/client.js";
import { generateRefreshToken } from "../../shared/utils/refresh-token.js";
import { AppError } from "../../shared/errors/app-error.js";

export interface ITokenService {
    generateAccessToken(user: User): string;
    generateRefreshToken(): string;
    verifyAccessToken(token: string): string;
}

export class TokenService implements ITokenService {
    public generateAccessToken(user: User): string {
        const payload = {
            sub: user.id,
            role: user.role,
        };

        const options: SignOptions = {
            expiresIn: env.JWT_ACCESS_EXPIRES_IN as NonNullable<SignOptions["expiresIn"]>,
        };

        return jwt.sign(payload, env.JWT_ACCESS_SECRET, options);
    }
    public generateRefreshToken(): string {
        return generateRefreshToken();
    }
    public verifyAccessToken(token: string): string {
        try {
            const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);

            if (typeof decoded === "string" || typeof decoded.sub !== "string") {
                throw new Error("Invalid token payload.");
            }

            return decoded.sub;
        } catch {
            throw new AppError("Invalid or expired authentication token.", 401, "INVALID_TOKEN");
        }
    }
}

export const tokenService = new TokenService();
