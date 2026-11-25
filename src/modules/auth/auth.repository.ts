import type { User } from "../../../generated/prisma/client.js";
import { prisma } from "../../infrastructure/database/prisma.js";
import type { IAuthRepository } from "./auth.repository.interface.js";
import type { IRegisterDTO } from "./dto/register.dto.js";

export class AuthRepository implements IAuthRepository {
    public async findByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { email } });
    }

    public async createUser(data: IRegisterDTO & { passwordHash: string }): Promise<User> {
        return prisma.user.create({
            data: {
                email: data.email,
                passwordHash: data.passwordHash,
                firstName: data.firstName,
                lastName: data.lastName,
                ...(data.phone !== undefined && {
                    phone: data.phone,
                }),
            },
        });
    }
}
export const authRepository: IAuthRepository = new AuthRepository();
