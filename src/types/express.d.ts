import type { UserRole } from "../../generated/prisma/client.js";

declare global {
    namespace Express {
        interface UserPayload {
            sub: string;
            role: UserRole;
        }

        interface Request {
            user?: UserPayload;
        }
    }
}

export {};
