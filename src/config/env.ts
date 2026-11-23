import dotenv from "dotenv";
import { envSchema } from "./envSchema.js";

dotenv.config();

const parseEnv = envSchema.safeParse(process.env);

if (!parseEnv.success) {
    console.error("Invalid environment configuration:.");
    console.error(
        parseEnv.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
        })),
    );

    process.exit(1);
}

export const env = parseEnv.data;
