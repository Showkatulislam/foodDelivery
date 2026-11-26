import type { z } from "zod";
import type { resetPasswordSchema } from "../validators/reset-password.schema.js";

export type IResetPasswordDTO = z.infer<typeof resetPasswordSchema>;
