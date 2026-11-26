export class OrderService {
    menuReader;
    constructor(menuReader) {
        this.menuReader = menuReader;
    }
    async validateMenuItem(menuItemId) {
        const menuItem = await this.menuReader.findOrderableItemById(menuItemId);
        if (!menuItem || !menuItem.isAvailable) {
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=order.service.js.map