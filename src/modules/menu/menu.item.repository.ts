import { prisma } from "../../infrastructure/database/prisma.js";
import type { MenuItemForOrder } from "./contracts/menu-reader.interface.js";
import type { IMenuItemRepository } from "./menu-item.repository.interface.js";

export class MenuItemRepository implements IMenuItemRepository {
    public async findById(menuItemId: string): Promise<MenuItemForOrder | null> {
        const menuItem = await prisma.menuItem.findUnique({
            where: {
                id: menuItemId,
            },
            select: {
                id: true,
                restaurantId: true,
                name: true,
                price: true,
                isAvailable: true,
            },
        });
        if (!menuItem) {
            return null;
        }

        return {
            id: menuItem.id,
            restaurantId: menuItem.restaurantId,
            name: menuItem.name,
            price: menuItem.price.toString(),
            isAvailable: menuItem.isAvailable,
        };
    }
}

export const menuItemRepository = new MenuItemRepository();
