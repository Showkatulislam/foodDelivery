import { prisma } from "../../infrastructure/database/prisma.js";
export class AuthRepository {
    async findById(id) {
        return prisma.user.findUnique({
            where: { id },
        });
    }
    async findByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    }
    async createUser(data) {
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
export const authRepository = new AuthRepository();
//# sourceMappingURL=auth.repository.js.map