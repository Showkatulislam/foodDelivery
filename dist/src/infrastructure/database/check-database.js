import { prisma } from "./prisma.js";
export const checkDatabaseConnection = async () => {
    await prisma.$connect();
    await prisma.$queryRaw `SELECT 1`;
    console.log("PostgreSQL connected successfully.");
};
//# sourceMappingURL=check-database.js.map