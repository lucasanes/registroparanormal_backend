/*
  Warnings:

  - You are about to drop the `Personagem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Personagem";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "fichasPericias" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasPericias_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasDefesas" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasDefesas_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasPersonagem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "historia" TEXT NOT NULL,
    "aparencia" TEXT NOT NULL,
    "pep" TEXT NOT NULL,
    "dfm" TEXT NOT NULL,
    "favoritos" TEXT NOT NULL,
    "personalidade" TEXT NOT NULL,
    "piorpesadelo" TEXT NOT NULL,
    "anotacoesPlayer" TEXT NOT NULL,
    "anotacoesPersonagem" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasPersonagem_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
