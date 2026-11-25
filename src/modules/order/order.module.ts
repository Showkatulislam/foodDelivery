import type { IMenuReader } from "../menu/index.js";
import { OrderService } from "./order.service.js";

interface IOrderModuleDependencies {
    menuReader: IMenuReader;
}

export const createOrderModule = (dependencies: IOrderModuleDependencies): OrderService => {
    return new OrderService(dependencies.menuReader);
};
