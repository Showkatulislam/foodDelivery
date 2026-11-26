import type { User } from "../../../generated/prisma/client.js";
import type { IAuthRepository } from "./auth.repository.interface.js";
import type { IRegisterDTO } from "./dto/register.dto.js";
export declare class AuthRepository implements IAuthRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    createUser(data: IRegisterDTO & {
        passwordHash: string;
    }): Promise<User>;
}
export declare const authRepository: IAuthRepository;
