import { Redis } from "ioredis";
export declare const redis: Redis<"legacy">;
export declare function disconnectRedis(): Promise<void>;
