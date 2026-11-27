import type { PrismaClient } from "../../../../generated/prisma/client.js";
import type { DeliveryAssignment } from "../../../../generated/prisma/client.js";
import type { IDeliveryAssignmentRepository } from "./delivery-assignment.repository.interface.js";

export class DeliveryAssignmentRepository implements IDeliveryAssignmentRepository {
    constructor(private readonly prisma: PrismaClient) {}

    public async findActiveAssignment(
        riderId: string,
        deliveryId: string,
    ): Promise<DeliveryAssignment | null> {
        return this.prisma.deliveryAssignment.findFirst({
            where: {
                riderId,
                deliveryId,
                status: {
                    in: ["ASSIGNED", "ACCEPTED"],
                },
            },
        });
    }
}
