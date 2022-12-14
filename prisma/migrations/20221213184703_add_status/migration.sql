/*
  Warnings:

  - Added the required column `combate` to the `fichasStatuss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `danoMassivo` to the `fichasStatuss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inconsciente` to the `fichasStatuss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insano` to the `fichasStatuss` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_fichasStatuss" (
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
    CONSTRAINT "fichasStatuss_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_fichasStatuss" ("fichaId", "id", "municao", "municaoMax", "pe", "peMax", "peso", "ps", "psMax", "pv", "pvMax") SELECT "fichaId", "id", "municao", "municaoMax", "pe", "peMax", "peso", "ps", "psMax", "pv", "pvMax" FROM "fichasStatuss";
DROP TABLE "fichasStatuss";
ALTER TABLE "new_fichasStatuss" RENAME TO "fichasStatuss";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
