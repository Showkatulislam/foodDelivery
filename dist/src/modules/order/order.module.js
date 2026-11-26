import { OrderService } from "./order.service.js";
export const createOrderModule = (dependencies) => {
    return new OrderService(dependencies.menuReader);
};
//# sourceMappingURL=order.module.js.map