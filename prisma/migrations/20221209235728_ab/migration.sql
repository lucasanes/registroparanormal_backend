/*
  Warnings:

  - You are about to drop the `fichasAtributos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fichasStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "fichasAtributos";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "fichasStatus";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "fichasAtributo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vig" INTEGER NOT NULL,
    "pre" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasAtributo_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasStatuss" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "ps" INTEGER NOT NULL,
    "psMax" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "peMax" INTEGER NOT NULL,
    "municao" INTEGER,
    "municaoMax" INTEGER,
    "peso" INTEGER NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasStatuss_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
