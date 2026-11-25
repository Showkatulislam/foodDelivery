import type { IMenuReader, MenuItemForOrder } from "./contracts/menu-reader.interface.js";
import type { IMenuItemRepository } from "./menu-item.repository.interface.js";

export class MenuReaderService implements IMenuReader {
    constructor(private readonly menuItemRepository: IMenuItemRepository) {}

    public async findOrderableItemById(menuItemId: string): Promise<MenuItemForOrder | null> {
        return await this.menuItemRepository.findById(menuItemId);
    }
}
