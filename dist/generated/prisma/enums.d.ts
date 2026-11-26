export declare const UserRole: {
    readonly CUSTOMER: "CUSTOMER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const AddressLabel: {
    readonly HOME: "HOME";
    readonly OFFICE: "OFFICE";
    readonly OTHER: "OTHER";
};
export type AddressLabel = (typeof AddressLabel)[keyof typeof AddressLabel];
export declare const RestaurantRole: {
    readonly OWNER: "OWNER";
    readonly MANAGER: "MANAGER";
};
export type RestaurantRole = (typeof RestaurantRole)[keyof typeof RestaurantRole];
export declare const MembershipStatus: {
    readonly INVITED: "INVITED";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];
export declare const RiderStatus: {
    readonly OFFLINE: "OFFLINE";
    readonly AVAILABLE: "AVAILABLE";
    readonly BUSY: "BUSY";
    readonly SUSPENDED: "SUSPENDED";
};
export type RiderStatus = (typeof RiderStatus)[keyof typeof RiderStatus];
export declare const DeliveryStatus: {
    readonly PENDING_ASSIGNMENT: "PENDING_ASSIGNMENT";
    readonly ASSIGNED: "ASSIGNED";
    readonly PICKED_UP: "PICKED_UP";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];
export declare const DeliveryAssignmentStatus: {
    readonly ASSIGNED: "ASSIGNED";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
};
export type DeliveryAssignmentStatus = (typeof DeliveryAssignmentStatus)[keyof typeof DeliveryAssignmentStatus];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly PREPARING: "PREPARING";
    readonly READY_FOR_PICKUP: "READY_FOR_PICKUP";
    readonly OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SUCCEEDED: "SUCCEEDED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentMethod: {
    readonly CASH: "CASH";
    readonly CARD: "CARD";
    readonly MOBILE_PAYMENT: "MOBILE_PAYMENT";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const OutboxStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly PUBLISHED: "PUBLISHED";
};
export type OutboxStatus = (typeof OutboxStatus)[keyof typeof OutboxStatus];
