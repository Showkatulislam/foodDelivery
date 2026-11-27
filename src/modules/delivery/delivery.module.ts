import { prisma } from "../../infrastructure/database/prisma.js";
import { RiderRepository } from "./rider/rider.repository.js";

export const riderRepository = new RiderRepository(prisma);

import { DeliveryAssignmentRepository } from "./delivery-assignment/delivery-assignment.repository.js";

export const deliveryAssignmentRepository = new DeliveryAssignmentRepository(prisma);
