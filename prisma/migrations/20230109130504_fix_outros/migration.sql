/*
  Warnings:

  - You are about to drop the column `habilidade` on the `fichasOutros` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "fichasOutros" DROP COLUMN "habilidade",
ADD COLUMN     "habilidades" TEXT;
