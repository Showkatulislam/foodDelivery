import z from "zod";
export declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    PORT: z.ZodDefault<z.z.ZodCoercedNumber<unknown>>;
    POSTGRES_USER: z.ZodString;
    POSTGRES_PASSWORD: z.ZodString;
    POSTGRES_DB: z.ZodString;
    DATABASE_URL: z.ZodString;
    REDIS_URL: z.ZodString;
    JWT_ACCESS_SECRET: z.ZodString;
    JWT_REFRESH_SECRET: z.ZodString;
    JWT_ACCESS_EXPIRES_IN: z.ZodString;
    JWT_REFRESH_EXPIRES_IN: z.ZodString;
    CORS_ORIGIN: z.ZodDefault<z.ZodString>;
    LOG_LEVEL: z.ZodDefault<z.ZodEnum<{
        error: "error";
        fatal: "fatal";
        warn: "warn";
        info: "info";
        debug: "debug";
        trace: "trace";
    }>>;
}, z.z.core.$strip>;
