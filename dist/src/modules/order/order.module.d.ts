import type { IMenuReader } from "../menu/index.js";
import { OrderService } from "./order.service.js";
interface IOrderModuleDependencies {
    menuReader: IMenuReader;
}
export declare const createOrderModule: (dependencies: IOrderModuleDependencies) => OrderService;
export {};
