/*
  Warnings:

  - You are about to drop the column `municao` on the `fichasStatus` table. All the data in the column will be lost.
  - You are about to drop the column `municaoMax` on the `fichasStatus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "armas" ADD COLUMN     "municao" INTEGER;

-- AlterTable
ALTER TABLE "fichasStatus" DROP COLUMN "municao",
DROP COLUMN "municaoMax";
