/*
  Warnings:

  - You are about to drop the `fichasStatuss` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "fichasStatuss";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "fichasStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "combate" BOOLEAN NOT NULL,
    "insano" BOOLEAN NOT NULL,
    "danoMassivo" BOOLEAN NOT NULL,
    "inconsciente" BOOLEAN NOT NULL,
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
    CONSTRAINT "fichasStatus_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
