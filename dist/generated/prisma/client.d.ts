import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model Address
 *
 */
export type Address = Prisma.AddressModel;
/**
 * Model Restaurant
 *
 */
export type Restaurant = Prisma.RestaurantModel;
/**
 * Model RestaurantMembership
 *
 */
export type RestaurantMembership = Prisma.RestaurantMembershipModel;
/**
 * Model MenuCategory
 *
 */
export type MenuCategory = Prisma.MenuCategoryModel;
/**
 * Model MenuItem
 *
 */
export type MenuItem = Prisma.MenuItemModel;
/**
 * Model Rider
 *
 */
export type Rider = Prisma.RiderModel;
/**
 * Model Delivery
 *
 */
export type Delivery = Prisma.DeliveryModel;
/**
 * Model DeliveryAssignment
 *
 */
export type DeliveryAssignment = Prisma.DeliveryAssignmentModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model OrderItem
 *
 */
export type OrderItem = Prisma.OrderItemModel;
/**
 * Model OrderStatusHistory
 *
 */
export type OrderStatusHistory = Prisma.OrderStatusHistoryModel;
/**
 * Model Payment
 *
 */
export type Payment = Prisma.PaymentModel;
/**
 * Model OutboxEvent
 *
 */
export type OutboxEvent = Prisma.OutboxEventModel;
