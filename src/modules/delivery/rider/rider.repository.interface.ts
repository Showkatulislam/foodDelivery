import type { Rider } from "../../../../generated/prisma/client.js";

export interface IRiderRepository {
    findByUserId(userId: string): Promise<Rider | null>;
}
