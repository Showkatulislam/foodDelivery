import type { IMenuReader } from "./contracts/menu-reader.interface.js";
import { MenuItemRepository } from "./menu.item.repository.js";
import { MenuReaderService } from "./menu.reader.service.js";

interface IMenuModule {
    menuReader: IMenuReader;
}

export const createMenuModule = (): IMenuModule => {
    const menuItemRepository = new MenuItemRepository();

    const menuReaderService = new MenuReaderService(menuItemRepository);

    return { menuReader: menuReaderService };
};
