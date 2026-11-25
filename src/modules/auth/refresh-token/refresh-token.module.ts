import { RefreshTokenRepository } from "./refresh-token.repository.js";
import { RefreshTokenService } from "./refresh-token.service.js";

const refreshTokenRepository = new RefreshTokenRepository();

export const refreshTokenService = new RefreshTokenService(refreshTokenRepository);
