import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../../config/env.js";
import type { User } from "../../../generated/prisma/client.js";
import { generateRefreshToken } from "../../shared/utils/refresh-token.js";

export interface ITokenService {
    generateAccessToken(user: User): string;
    generateRefreshToken(): string;
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
}

export const tokenService = new TokenService();
