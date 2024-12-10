import { PrismaClient } from "@prisma/client";

// Pastikan Prisma Client hanya dibuat sekali di mode development
// untuk menghindari multiple instances saat hot reloading.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Logging query untuk debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
