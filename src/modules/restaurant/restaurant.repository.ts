import type { RestaurantMembership } from "../../../generated/prisma/client.js";
import { prisma } from "../../infrastructure/database/prisma.js";
import type { IRestaurantRepository } from "./restaurant.repository.interface.js";

export class RestaurentRepository implements IRestaurantRepository {
    public async findActiveMembership(
        userId: string,
        restaurantId: string,
    ): Promise<RestaurantMembership | null> {
        return prisma.restaurantMembership.findUnique({
            where: {
                restaurantId_userId: {
                    restaurantId,
                    userId,
                },
                status: "ACTIVE",
            },
        });
    }
}
