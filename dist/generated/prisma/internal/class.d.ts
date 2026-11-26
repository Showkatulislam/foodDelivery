import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RefreshTokens
      * const refreshTokens = await prisma.refreshToken.findMany()
      * ```
      */
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.address`: Exposes CRUD operations for the **Address** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Addresses
      * const addresses = await prisma.address.findMany()
      * ```
      */
    get address(): Prisma.AddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Restaurants
      * const restaurants = await prisma.restaurant.findMany()
      * ```
      */
    get restaurant(): Prisma.RestaurantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.restaurantMembership`: Exposes CRUD operations for the **RestaurantMembership** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RestaurantMemberships
      * const restaurantMemberships = await prisma.restaurantMembership.findMany()
      * ```
      */
    get restaurantMembership(): Prisma.RestaurantMembershipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.menuCategory`: Exposes CRUD operations for the **MenuCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MenuCategories
      * const menuCategories = await prisma.menuCategory.findMany()
      * ```
      */
    get menuCategory(): Prisma.MenuCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MenuItems
      * const menuItems = await prisma.menuItem.findMany()
      * ```
      */
    get menuItem(): Prisma.MenuItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rider`: Exposes CRUD operations for the **Rider** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Riders
      * const riders = await prisma.rider.findMany()
      * ```
      */
    get rider(): Prisma.RiderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Deliveries
      * const deliveries = await prisma.delivery.findMany()
      * ```
      */
    get delivery(): Prisma.DeliveryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deliveryAssignment`: Exposes CRUD operations for the **DeliveryAssignment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeliveryAssignments
      * const deliveryAssignments = await prisma.deliveryAssignment.findMany()
      * ```
      */
    get deliveryAssignment(): Prisma.DeliveryAssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderItems
      * const orderItems = await prisma.orderItem.findMany()
      * ```
      */
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderStatusHistory`: Exposes CRUD operations for the **OrderStatusHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderStatusHistories
      * const orderStatusHistories = await prisma.orderStatusHistory.findMany()
      * ```
      */
    get orderStatusHistory(): Prisma.OrderStatusHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Payments
      * const payments = await prisma.payment.findMany()
      * ```
      */
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.outboxEvent`: Exposes CRUD operations for the **OutboxEvent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OutboxEvents
      * const outboxEvents = await prisma.outboxEvent.findMany()
      * ```
      */
    get outboxEvent(): Prisma.OutboxEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
