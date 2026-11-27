import type { RestaurantMembership } from "../../../generated/prisma/client.js";

export interface IRestaurantRepository {
    findActiveMembership(
        userId: string,
        restaurantId: string,
    ): Promise<RestaurantMembership | null>;
}
