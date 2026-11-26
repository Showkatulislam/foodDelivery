export class MenuReaderService {
    menuItemRepository;
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async findOrderableItemById(menuItemId) {
        return await this.menuItemRepository.findById(menuItemId);
    }
}
//# sourceMappingURL=menu.reader.service.js.map