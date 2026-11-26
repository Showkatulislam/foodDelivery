import type { IMenuReader } from "../menu/index.js";
export declare class OrderService {
    private readonly menuReader;
    constructor(menuReader: IMenuReader);
    validateMenuItem(menuItemId: string): Promise<boolean>;
}
