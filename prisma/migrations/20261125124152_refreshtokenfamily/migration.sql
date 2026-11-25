/*
  Warnings:

  - A unique constraint covering the columns `[replacedByTokenId]` on the table `refresh_tokens` will be added. If there are existing duplicate values, this will fail.
  - The required column `familyId` was added to the `refresh_tokens` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "refresh_tokens" ADD COLUMN     "familyId" TEXT NOT NULL,
ADD COLUMN     "replacedByTokenId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_replacedByTokenId_key" ON "refresh_tokens"("replacedByTokenId");

-- CreateIndex
CREATE INDEX "refresh_tokens_familyId_idx" ON "refresh_tokens"("familyId");

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_replacedByTokenId_fkey" FOREIGN KEY ("replacedByTokenId") REFERENCES "refresh_tokens"("id") ON DELETE SET NULL ON UPDATE CASCADE;
