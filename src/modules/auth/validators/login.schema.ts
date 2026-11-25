import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().trim().email("Please provide a valid email address.").toLowerCase(),

    password: z
        .string()
        .min(1, "Password is required.")
        .max(128, "Password must not exceed 128 characters."),
});

export type LoginInput = z.infer<typeof loginSchema>;
