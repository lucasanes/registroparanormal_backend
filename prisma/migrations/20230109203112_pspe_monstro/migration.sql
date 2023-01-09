/*
  Warnings:

  - You are about to drop the column `pe` on the `fichasNPCsMonstros` table. All the data in the column will be lost.
  - You are about to drop the column `peMax` on the `fichasNPCsMonstros` table. All the data in the column will be lost.
  - You are about to drop the column `ps` on the `fichasNPCsMonstros` table. All the data in the column will be lost.
  - You are about to drop the column `psMax` on the `fichasNPCsMonstros` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "fichasNPCsMonstros" DROP COLUMN "pe",
DROP COLUMN "peMax",
DROP COLUMN "ps",
DROP COLUMN "psMax";
