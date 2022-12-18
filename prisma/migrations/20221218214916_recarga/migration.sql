/*
  Warnings:

  - The `recarga` column on the `armas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "armas" DROP COLUMN "recarga",
ADD COLUMN     "recarga" INTEGER;
