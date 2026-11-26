import type { MenuItemForOrder } from "./contracts/menu-reader.interface.js";
import type { IMenuItemRepository } from "./menu-item.repository.interface.js";
export declare class MenuItemRepository implements IMenuItemRepository {
    findById(menuItemId: string): Promise<MenuItemForOrder | null>;
}
export declare const menuItemRepository: MenuItemRepository;
