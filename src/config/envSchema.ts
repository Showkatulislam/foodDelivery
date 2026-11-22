import z from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  PORT: z.coerce.number().int().min(1).max(65535).default(5000),

  POSTGRES_USER: z.string().min(1, "POSTGRES_USER is required"),

  POSTGRES_PASSWORD: z.string().min(1, "POSTGRES_PASSWORD is required"),

  POSTGRES_DB: z.string().min(1, "POSTGRES_DB is required"),

  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),

  REDIS_URL: z.string().min(1, "REDIS_URL is required"),

  JWT_ACCESS_SECRET: z.string().min(32, "JWT_ACCESS_SECRET must be at least 32 characters"),

  JWT_REFRESH_SECRET: z.string().min(32, "JWT_REFRESH_SECRET must be at least 32 characters"),

  JWT_ACCESS_EXPIRES_IN: z.string().min(1),

  JWT_REFRESH_EXPIRES_IN: z.string().min(1),

  CORS_ORIGIN: z.string().min(1).default("http://localhost:3000"),
});