/*
  Warnings:

  - You are about to drop the column `npc` on the `fichas` table. All the data in the column will be lost.
  - You are about to drop the column `npcmonstro` on the `fichas` table. All the data in the column will be lost.
  - You are about to drop the column `npcprincipal` on the `fichas` table. All the data in the column will be lost.
  - You are about to drop the `fichasOutros` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fichasOutros" DROP CONSTRAINT "fichasOutros_fichaId_fkey";

-- AlterTable
ALTER TABLE "fichas" DROP COLUMN "npc",
DROP COLUMN "npcmonstro",
DROP COLUMN "npcprincipal";

-- AlterTable
ALTER TABLE "fichasPrincipal" ALTER COLUMN "fichaId" DROP NOT NULL;

-- DropTable
DROP TABLE "fichasOutros";

-- CreateTable
CREATE TABLE "fichasNPCs" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "deslocamento" INTEGER NOT NULL,
    "nex" INTEGER NOT NULL,
    "trilha" TEXT,
    "patente" TEXT,
    "peso" INTEGER NOT NULL,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vig" INTEGER NOT NULL,
    "pre" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "ps" INTEGER NOT NULL,
    "psMax" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "peMax" INTEGER NOT NULL,
    "acrobacia" INTEGER,
    "adestramento" INTEGER,
    "arte" INTEGER,
    "atletismo" INTEGER,
    "atualidade" INTEGER,
    "ciencia" INTEGER,
    "crime" INTEGER,
    "diplomacia" INTEGER,
    "enganacao" INTEGER,
    "fortitude" INTEGER,
    "furtividade" INTEGER,
    "iniciativa" INTEGER,
    "intimidacao" INTEGER,
    "intuicao" INTEGER,
    "investigacao" INTEGER,
    "luta" INTEGER,
    "medicina" INTEGER,
    "ocultismo" INTEGER,
    "percepcao" INTEGER,
    "pilotagem" INTEGER,
    "pontaria" INTEGER,
    "profissao" INTEGER,
    "reflexo" INTEGER,
    "religiao" INTEGER,
    "sobrevivencia" INTEGER,
    "tatica" INTEGER,
    "tecnologia" INTEGER,
    "vontade" INTEGER,
    "passiva" INTEGER,
    "esquiva" INTEGER,
    "bloqueio" INTEGER,
    "mental" INTEGER,
    "morte" INTEGER,
    "conhecimento" INTEGER,
    "sangue" INTEGER,
    "energia" INTEGER,
    "fisica" INTEGER,
    "balistica" INTEGER,
    "corte" INTEGER,
    "impacto" INTEGER,
    "perfuracao" INTEGER,
    "eletricidade" INTEGER,
    "fogo" INTEGER,
    "frio" INTEGER,
    "quimica" INTEGER,
    "inventario" TEXT,
    "habilidades" TEXT,
    "detalhes" TEXT,
    "sessaoId" TEXT,

    CONSTRAINT "fichasNPCs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fichasNPCsMonstros" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT NOT NULL,
    "deslocamento" INTEGER NOT NULL,
    "nex" INTEGER NOT NULL,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vig" INTEGER NOT NULL,
    "pre" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "ps" INTEGER NOT NULL,
    "psMax" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "peMax" INTEGER NOT NULL,
    "acrobacia" INTEGER,
    "adestramento" INTEGER,
    "arte" INTEGER,
    "atletismo" INTEGER,
    "atualidade" INTEGER,
    "ciencia" INTEGER,
    "crime" INTEGER,
    "diplomacia" INTEGER,
    "enganacao" INTEGER,
    "fortitude" INTEGER,
    "furtividade" INTEGER,
    "iniciativa" INTEGER,
    "intimidacao" INTEGER,
    "intuicao" INTEGER,
    "investigacao" INTEGER,
    "luta" INTEGER,
    "medicina" INTEGER,
    "ocultismo" INTEGER,
    "percepcao" INTEGER,
    "pilotagem" INTEGER,
    "pontaria" INTEGER,
    "profissao" INTEGER,
    "reflexo" INTEGER,
    "religiao" INTEGER,
    "sobrevivencia" INTEGER,
    "tatica" INTEGER,
    "tecnologia" INTEGER,
    "vontade" INTEGER,
    "passiva" INTEGER,
    "esquiva" INTEGER,
    "bloqueio" INTEGER,
    "mental" INTEGER,
    "morte" INTEGER,
    "conhecimento" INTEGER,
    "sangue" INTEGER,
    "energia" INTEGER,
    "fisica" INTEGER,
    "balistica" INTEGER,
    "corte" INTEGER,
    "impacto" INTEGER,
    "perfuracao" INTEGER,
    "eletricidade" INTEGER,
    "fogo" INTEGER,
    "frio" INTEGER,
    "quimica" INTEGER,
    "inventario" TEXT,
    "habilidades" TEXT,
    "detalhes" TEXT,
    "sessaoId" TEXT,

    CONSTRAINT "fichasNPCsMonstros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fichasNPCs" ADD CONSTRAINT "fichasNPCs_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasNPCsMonstros" ADD CONSTRAINT "fichasNPCsMonstros_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
