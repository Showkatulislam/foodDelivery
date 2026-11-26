import type { IMenuReader, MenuItemForOrder } from "./contracts/menu-reader.interface.js";
import type { IMenuItemRepository } from "./menu-item.repository.interface.js";
export declare class MenuReaderService implements IMenuReader {
    private readonly menuItemRepository;
    constructor(menuItemRepository: IMenuItemRepository);
    findOrderableItemById(menuItemId: string): Promise<MenuItemForOrder | null>;
}
