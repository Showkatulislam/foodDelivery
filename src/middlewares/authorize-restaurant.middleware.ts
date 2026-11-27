import type { NextFunction, Request, Response } from "express";
import type { RestaurantRole } from "../../generated/prisma/enums.js";
import type { IRestaurantRepository } from "../modules/restaurant/restaurant.repository.interface.js";
import { AppError } from "../shared/errors/app-error.js";

export const authorizeRestaurant = (
    restaurantRepository: IRestaurantRepository,
    ...allowedRoles: RestaurantRole[]
) => {
    return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
        try {
            if (!req.user) {
                return next(
                    new AppError("Authentication is required.", 401, "AUTHENTICATION_REQUIRED"),
                );
            }
            const restaurantId = req.params.restaurantId as string;

            if (!restaurantId) {
                return next(
                    new AppError("Restaurant ID is required.", 400, "RESTAURAND_ID_REQUIRED."),
                );
            }

            const membership = await restaurantRepository.findActiveMembership(
                req.user.sub,
                restaurantId,
            );

            if (!membership) {
                return next(
                    new AppError(
                        "You do not have access to this resturant",
                        403,
                        "RESTAURANT_ACCESS_DENIED",
                    ),
                );
            }
            if (!allowedRoles.includes(membership.role)) {
                return next(
                    new AppError(
                        "You do not have permission to perform this action",
                        403,
                        "RESTAURANT_PERMISSION_DENIED.",
                    ),
                );
            }
            next();
        } catch (error) {
            next(error);
        }
    };
};
