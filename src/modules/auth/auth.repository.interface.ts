import type { User } from "../../../generated/prisma/client.js";
import type { IRegisterDTO } from "./dto/register.dto.js";

export interface IAuthRepository {
    findByEmail(email: string): Promise<User | null>;

    findById(id: string): Promise<User | null>;

    createUser(data: IRegisterDTO & { passwordHash: string }): Promise<User>;
}
