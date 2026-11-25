import type { IMenuReader } from "../menu/index.js";

export class OrderService {
    constructor(private readonly menuReader: IMenuReader) {}

    public async validateMenuItem(menuItemId: string): Promise<boolean> {
        const menuItem = await this.menuReader.findOrderableItemById(menuItemId);

        if (!menuItem || !menuItem.isAvailable) {
            return false;
        }
        return true;
    }
}
