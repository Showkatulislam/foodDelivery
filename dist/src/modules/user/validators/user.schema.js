import { z } from "zod";
export const createUserSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    password: z.string().min(8),
});
export const userIdSchema = z.object({
    id: z.string().uuid(),
});
export const paginationSchema = z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
});
//# sourceMappingURL=user.schema.js.map