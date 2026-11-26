import type z from "zod";
import type { forgetPasswordSchema } from "../validators/forget-password.schema.js";

export type IForgotPasswordDTO = z.infer<typeof forgetPasswordSchema>;
