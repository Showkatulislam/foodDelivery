import type { Server } from "node:http";

import { app } from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./infrastructure/database/prisma.js";

let httpServer: Server | undefined;
let isShuttingDown = false;

const startServer = async (): Promise<void> => {
    try {
        await prisma.$connect();

        console.log("PostgreSQL connected successfully.");

        httpServer = app.listen(env.PORT, () => {
            console.log(`Server running on port ${env.PORT}`);
        });
    } catch (error: unknown) {
        console.error("Application startup failed:", error);

        await prisma.$disconnect();

        process.exitCode = 1;
    }
};

const shutdown = async (signal: string): Promise<void> => {
    if (isShuttingDown) {
        return;
    }

    isShuttingDown = true;

    console.log(`${signal} received. Shutting down gracefully...`);

    try {
        if (httpServer) {
            await new Promise<void>((resolve, reject) => {
                httpServer?.close((error) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve();
                });
            });
        }

        await prisma.$disconnect();

        console.log("Application shutdown completed.");

        process.exitCode = 0;
    } catch (error: unknown) {
        console.error("Application shutdown failed:", error);

        process.exitCode = 1;
    }
};

process.on("SIGTERM", () => {
    void shutdown("SIGTERM");
});

process.on("SIGINT", () => {
    void shutdown("SIGINT");
});

void startServer();
