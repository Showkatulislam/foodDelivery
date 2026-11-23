import { Redis } from "ioredis";
import { env } from "../../config/env.js";

export const redis = new Redis(env.REDIS_URL, {
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
    retryStrategy(times: number): number | null {
        if (times > 10) {
            return null;
        }
        return Math.min(times * 500, 5000);
    },
});

redis.on("connect", (): void => {
    console.info("Redis connection established.");
});

redis.on("ready", (): void => {
    console.info("Redis is ready.");
});

redis.on("error", (error: Error): void => {
    console.error("Redis connection error: ", error.message);
});

redis.on("close", (): void => {
    console.warn("Redis connection closed.");
});

export async function disconnectRedis(): Promise<void> {
    if (redis.status === "end") {
        return;
    }
    await redis.quit();
}
