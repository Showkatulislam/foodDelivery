import { Redis } from "ioredis";
import { env } from "../../config/env.js";
export const redis = new Redis(env.REDIS_URL, {
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
    retryStrategy(times) {
        if (times > 10) {
            return null;
        }
        return Math.min(times * 500, 5000);
    },
});
redis.on("connect", () => {
    console.info("Redis connection established.");
});
redis.on("ready", () => {
    console.info("Redis is ready.");
});
redis.on("error", (error) => {
    console.error("Redis connection error: ", error.message);
});
redis.on("close", () => {
    console.warn("Redis connection closed.");
});
export async function disconnectRedis() {
    if (redis.status === "end") {
        return;
    }
    await redis.quit();
}
//# sourceMappingURL=redis.js.map