import type { User } from "../../../generated/prisma/client.js";
import type { IAuthRepository } from "./auth.repository.interface.js";
import type { ILoginDTO } from "./dto/login.dto.js";
import type { IRegisterDTO } from "./dto/register.dto.js";
import type { RefreshTokenService } from "./refresh-token/refresh-token.service.js";
import type { TokenService } from "./token.service.js";
export declare class AuthService {
    private readonly authRepository;
    private readonly tokenService;
    private readonly refreshTokenService;
    constructor(authRepository: IAuthRepository, tokenService: TokenService, refreshTokenService: RefreshTokenService);
    register(data: IRegisterDTO): Promise<Omit<User, "passwordHash">>;
    Login(data: ILoginDTO): Promise<{
        user: Omit<User, "passwordHash">;
        accessToken: string;
        refreshToken: string;
    }>;
}
