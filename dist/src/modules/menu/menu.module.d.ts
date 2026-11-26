import type { IMenuReader } from "./contracts/menu-reader.interface.js";
interface IMenuModule {
    menuReader: IMenuReader;
}
export declare const createMenuModule: () => IMenuModule;
export {};
