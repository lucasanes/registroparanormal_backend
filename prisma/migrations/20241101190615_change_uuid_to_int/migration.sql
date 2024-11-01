/*
  Warnings:

  - The primary key for the `anotacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `anotacoes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `armas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `armas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sessaoId` column on the `armas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fichaId` column on the `armas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `convites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `convites` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `dados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `dados` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fichaId` column on the `dados` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sessaoId` column on the `dados` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sessaoId` column on the `fichas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasAtributo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasAtributo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasDefesas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasDefesas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasHabilidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasHabilidades` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasNPCs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasNPCs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sessaoId` column on the `fichasNPCs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasNPCsMonstros` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasNPCsMonstros` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sessaoId` column on the `fichasNPCsMonstros` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasPericias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasPericias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasPersonagem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasPersonagem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasPoderes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasPoderes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasPortrait` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasPortrait` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasPrincipal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasPrincipal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fichaId` column on the `fichasPrincipal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasProficiencias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasProficiencias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasRituais` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasRituais` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fichasStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fichasStatus` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `iniciativas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `iniciativas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `itens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `itens` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sessaoId` column on the `itens` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fichaId` column on the `itens` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `participantes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `participantes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `recoveries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `recoveries` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `sessoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `sessoes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `sessaoId` on the `anotacoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `sessaoId` on the `convites` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `fichas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasAtributo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasDefesas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasHabilidades` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasPericias` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasPersonagem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasPoderes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasPortrait` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasProficiencias` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasRituais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `fichasStatus` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `sessaoId` on the `iniciativas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `sessaoId` on the `participantes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `participantes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fichaId` on the `participantes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `sessoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "anotacoes" DROP CONSTRAINT "anotacoes_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "armas" DROP CONSTRAINT "armas_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "armas" DROP CONSTRAINT "armas_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "convites" DROP CONSTRAINT "convites_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "dados" DROP CONSTRAINT "dados_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "dados" DROP CONSTRAINT "dados_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "fichas" DROP CONSTRAINT "fichas_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "fichas" DROP CONSTRAINT "fichas_userId_fkey";

-- DropForeignKey
ALTER TABLE "fichasAtributo" DROP CONSTRAINT "fichasAtributo_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasDefesas" DROP CONSTRAINT "fichasDefesas_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasHabilidades" DROP CONSTRAINT "fichasHabilidades_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasNPCs" DROP CONSTRAINT "fichasNPCs_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "fichasNPCsMonstros" DROP CONSTRAINT "fichasNPCsMonstros_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "fichasPericias" DROP CONSTRAINT "fichasPericias_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasPersonagem" DROP CONSTRAINT "fichasPersonagem_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasPoderes" DROP CONSTRAINT "fichasPoderes_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasPortrait" DROP CONSTRAINT "fichasPortrait_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasPrincipal" DROP CONSTRAINT "fichasPrincipal_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasProficiencias" DROP CONSTRAINT "fichasProficiencias_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasRituais" DROP CONSTRAINT "fichasRituais_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "fichasStatus" DROP CONSTRAINT "fichasStatus_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "iniciativas" DROP CONSTRAINT "iniciativas_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "itens" DROP CONSTRAINT "itens_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "itens" DROP CONSTRAINT "itens_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "participantes" DROP CONSTRAINT "participantes_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "participantes" DROP CONSTRAINT "participantes_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "participantes" DROP CONSTRAINT "participantes_userId_fkey";

-- DropForeignKey
ALTER TABLE "sessoes" DROP CONSTRAINT "sessoes_userId_fkey";

-- AlterTable
ALTER TABLE "anotacoes" DROP CONSTRAINT "anotacoes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER NOT NULL,
ADD CONSTRAINT "anotacoes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "armas" DROP CONSTRAINT "armas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER,
ADD CONSTRAINT "armas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "convites" DROP CONSTRAINT "convites_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER NOT NULL,
ADD CONSTRAINT "convites_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "dados" DROP CONSTRAINT "dados_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER,
ADD CONSTRAINT "dados_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichas" DROP CONSTRAINT "fichas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER,
ADD CONSTRAINT "fichas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasAtributo" DROP CONSTRAINT "fichasAtributo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasAtributo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasDefesas" DROP CONSTRAINT "fichasDefesas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasDefesas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasHabilidades" DROP CONSTRAINT "fichasHabilidades_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasHabilidades_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasNPCs" DROP CONSTRAINT "fichasNPCs_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER,
ADD CONSTRAINT "fichasNPCs_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasNPCsMonstros" DROP CONSTRAINT "fichasNPCsMonstros_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER,
ADD CONSTRAINT "fichasNPCsMonstros_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasPericias" DROP CONSTRAINT "fichasPericias_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasPericias_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasPersonagem" DROP CONSTRAINT "fichasPersonagem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasPersonagem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasPoderes" DROP CONSTRAINT "fichasPoderes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasPoderes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasPortrait" DROP CONSTRAINT "fichasPortrait_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasPortrait_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasPrincipal" DROP CONSTRAINT "fichasPrincipal_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER,
ADD CONSTRAINT "fichasPrincipal_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasProficiencias" DROP CONSTRAINT "fichasProficiencias_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasProficiencias_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasRituais" DROP CONSTRAINT "fichasRituais_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasRituais_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fichasStatus" DROP CONSTRAINT "fichasStatus_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "fichasStatus_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "iniciativas" DROP CONSTRAINT "iniciativas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER NOT NULL,
ADD CONSTRAINT "iniciativas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "itens" DROP CONSTRAINT "itens_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER,
ADD CONSTRAINT "itens_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "participantes" DROP CONSTRAINT "participantes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessaoId",
ADD COLUMN     "sessaoId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "fichaId",
ADD COLUMN     "fichaId" INTEGER NOT NULL,
ADD CONSTRAINT "participantes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "recoveries" DROP CONSTRAINT "recoveries_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "recoveries_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "sessoes" DROP CONSTRAINT "sessoes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "sessoes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "sessoes" ADD CONSTRAINT "sessoes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantes" ADD CONSTRAINT "participantes_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantes" ADD CONSTRAINT "participantes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantes" ADD CONSTRAINT "participantes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convites" ADD CONSTRAINT "convites_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anotacoes" ADD CONSTRAINT "anotacoes_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "iniciativas" ADD CONSTRAINT "iniciativas_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dados" ADD CONSTRAINT "dados_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dados" ADD CONSTRAINT "dados_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichas" ADD CONSTRAINT "fichas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichas" ADD CONSTRAINT "fichas_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasNPCs" ADD CONSTRAINT "fichasNPCs_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasNPCsMonstros" ADD CONSTRAINT "fichasNPCsMonstros_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasPrincipal" ADD CONSTRAINT "fichasPrincipal_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasAtributo" ADD CONSTRAINT "fichasAtributo_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasStatus" ADD CONSTRAINT "fichasStatus_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasPericias" ADD CONSTRAINT "fichasPericias_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasDefesas" ADD CONSTRAINT "fichasDefesas_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasPersonagem" ADD CONSTRAINT "fichasPersonagem_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasPortrait" ADD CONSTRAINT "fichasPortrait_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasHabilidades" ADD CONSTRAINT "fichasHabilidades_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasPoderes" ADD CONSTRAINT "fichasPoderes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasProficiencias" ADD CONSTRAINT "fichasProficiencias_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasRituais" ADD CONSTRAINT "fichasRituais_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
