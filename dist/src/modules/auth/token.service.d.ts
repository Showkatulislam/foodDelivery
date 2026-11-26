import type { User } from "../../../generated/prisma/client.js";
export interface ITokenService {
    generateAccessToken(user: User): string;
    generateRefreshToken(): string;
}
export declare class TokenService implements ITokenService {
    generateAccessToken(user: User): string;
    generateRefreshToken(): string;
}
export declare const tokenService: TokenService;
