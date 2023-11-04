/*
  Warnings:

  - Added the required column `ataque` to the `armas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "armas" ADD COLUMN     "ataque" TEXT NOT NULL;
