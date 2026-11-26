export interface MenuItemForOrder {
    id: string;
    restaurantId: string;
    name: string;
    price: string;
    isAvailable: boolean;
}
export interface IMenuReader {
    findOrderableItemById(menuItemId: string): Promise<MenuItemForOrder | null>;
}
