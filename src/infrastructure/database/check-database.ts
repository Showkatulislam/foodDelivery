
import { prisma } from "./prisma.js";

export const checkDatabaseConnection = async (): Promise<void> => {
  await prisma.$connect();
  await prisma.$queryRaw`SELECT 1`;

  console.log("PostgreSQL connected successfully.");
};
