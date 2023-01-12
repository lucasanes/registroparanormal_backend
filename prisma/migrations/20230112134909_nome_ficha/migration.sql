/*
  Warnings:

  - Added the required column `nome` to the `fichas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fichas" ADD COLUMN     "nome" TEXT NOT NULL;
