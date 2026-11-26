import type z from "zod";
import type { forgotPasswordSchema } from "../validators/forget-password.schema.js";

export type IForgotPasswordDTO = z.infer<typeof forgotPasswordSchema>;
