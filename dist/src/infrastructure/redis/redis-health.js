import { redis } from "./redis.js";
async function checkRedis() {
    try {
        const result = await redis.ping();
        console.log("Redis ping:", result);
    }
    catch (error) {
        console.error("Redis verification failed:", error);
    }
    finally {
        await redis.quit();
    }
}
await checkRedis();
//# sourceMappingURL=redis-health.js.map