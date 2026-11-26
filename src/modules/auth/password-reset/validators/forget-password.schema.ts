import z from "zod";

export const forgetPasswordSchema = z.object({
    email: z.string().trim().email("Invalid email address."),
});
