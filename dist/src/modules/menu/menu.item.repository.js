import { prisma } from "../../infrastructure/database/prisma.js";
export class MenuItemRepository {
    async findById(menuItemId) {
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
//# sourceMappingURL=menu.item.repository.js.map