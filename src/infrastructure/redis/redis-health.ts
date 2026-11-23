import { redis } from "./redis.js";

async function checkRedis(): Promise<void> {
    try {
        const result: string = await redis.ping();

        console.log("Redis ping:", result);
    } catch (error: unknown) {
        console.error("Redis verification failed:", error);
    } finally {
        await redis.quit();
    }
}

await checkRedis();
