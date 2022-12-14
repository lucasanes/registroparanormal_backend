/*
  Warnings:

  - You are about to drop the `Portrait` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Portrait";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "fichasPortrait" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "normal" TEXT,
    "ferido" TEXT,
    "insano" TEXT,
    "insanoeferido" TEXT,
    "morrendo" TEXT,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasPortrait_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
