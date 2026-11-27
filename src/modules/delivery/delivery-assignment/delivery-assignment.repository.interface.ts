import type { DeliveryAssignment } from "../../../../generated/prisma/client.js";

export interface IDeliveryAssignmentRepository {
    findActiveAssignment(riderId: string, deliveryId: string): Promise<DeliveryAssignment | null>;
}
