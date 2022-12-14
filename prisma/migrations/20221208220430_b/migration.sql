/*
  Warnings:

  - Added the required column `pe` to the `fichasStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peMax` to the `fichasStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ps` to the `fichasStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `psMax` to the `fichasStatus` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_fichasStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "ps" INTEGER NOT NULL,
    "psMax" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "peMax" INTEGER NOT NULL,
    "municao" INTEGER,
    "municaoMax" INTEGER,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasStatus_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_fichasStatus" ("fichaId", "id", "pv", "pvMax") SELECT "fichaId", "id", "pv", "pvMax" FROM "fichasStatus";
DROP TABLE "fichasStatus";
ALTER TABLE "new_fichasStatus" RENAME TO "fichasStatus";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
