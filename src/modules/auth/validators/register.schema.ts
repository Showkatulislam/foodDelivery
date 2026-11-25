import z from "zod";

export const registerSchema = z.object({
    email: z.string().email("Please provide a valid email address.").trim().toLowerCase(),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters.")
        .max(128, "Password must not exceed 128 characters."),

    firstName: z
        .string()
        .trim()
        .min(2, "First name must be at least 2 characters.")
        .max(50, "First name must not exceed 50 characters."),

    lastName: z
        .string()
        .trim()
        .min(2, "Last name must be at least 2 characters.")
        .max(50, "Last name must not exceed 50 characters."),

    phone: z
        .string()
        .trim()
        .min(7, "Phone number is too short.")
        .max(20, "Phone number is too long.")
        .optional(),
});
