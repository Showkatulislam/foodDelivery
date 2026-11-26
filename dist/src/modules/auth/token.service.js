import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import { generateRefreshToken } from "../../shared/utils/refresh-token.js";
export class TokenService {
    generateAccessToken(user) {
        const payload = {
            sub: user.id,
            role: user.role,
        };
        const options = {
            expiresIn: env.JWT_ACCESS_EXPIRES_IN,
        };
        return jwt.sign(payload, env.JWT_ACCESS_SECRET, options);
    }
    generateRefreshToken() {
        return generateRefreshToken();
    }
}
export const tokenService = new TokenService();
//# sourceMappingURL=token.service.js.map