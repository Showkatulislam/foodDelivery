import type { MenuItemForOrder } from "./contracts/menu-reader.interface.js";
export interface IMenuItemRepository {
    findById(menuItemId: string): Promise<MenuItemForOrder | null>;
}
