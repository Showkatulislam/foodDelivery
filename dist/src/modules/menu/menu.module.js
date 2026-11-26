import { MenuItemRepository } from "./menu.item.repository.js";
import { MenuReaderService } from "./menu.reader.service.js";
export const createMenuModule = () => {
    const menuItemRepository = new MenuItemRepository();
    const menuReaderService = new MenuReaderService(menuItemRepository);
    return { menuReader: menuReaderService };
};
//# sourceMappingURL=menu.module.js.map