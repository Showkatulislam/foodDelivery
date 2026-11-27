import { RestaurantRole } from "../../../generated/prisma/enums.js";
import { authorizeRestaurant } from "../../middlewares/authorize-restaurant.middleware.js";
import { RestaurentRepository } from "./restaurant.repository.js";

const restaurantRepository = new RestaurentRepository();

export const restaurantAuthorization = {
    owner: authorizeRestaurant(restaurantRepository, RestaurantRole.OWNER),
    ownerOrManager: authorizeRestaurant(
        restaurantRepository,
        RestaurantRole.OWNER,
        RestaurantRole.MANAGER,
    ),
};
