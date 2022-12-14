/*
  Warnings:

  - You are about to drop the column `municao` on the `fichasStatus` table. All the data in the column will be lost.
  - You are about to drop the column `municaoMax` on the `fichasStatus` table. All the data in the column will be lost.
  - You are about to drop the column `pe` on the `fichasStatus` table. All the data in the column will be lost.
  - You are about to drop the column `peMax` on the `fichasStatus` table. All the data in the column will be lost.
  - You are about to drop the column `ps` on the `fichasStatus` table. All the data in the column will be lost.
  - You are about to drop the column `psMax` on the `fichasStatus` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_fichasStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasStatus_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_fichasStatus" ("fichaId", "id", "pv", "pvMax") SELECT "fichaId", "id", "pv", "pvMax" FROM "fichasStatus";
DROP TABLE "fichasStatus";
ALTER TABLE "new_fichasStatus" RENAME TO "fichasStatus";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
