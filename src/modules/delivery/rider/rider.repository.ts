import type { PrismaClient, Rider } from "../../../../generated/prisma/client.js";
import type { IRiderRepository } from "./rider.repository.interface.js";

export class RiderRepository implements IRiderRepository {
    constructor(private readonly prisma: PrismaClient) {}

    public async findByUserId(userId: string): Promise<Rider | null> {
        return this.prisma.rider.findUnique({
            where: {
                userId,
            },
        });
    }
}
