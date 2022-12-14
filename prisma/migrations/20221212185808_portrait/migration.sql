-- CreateTable
CREATE TABLE "Portrait" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "normal" TEXT,
    "ferido" TEXT,
    "insano" TEXT,
    "insanoeferido" TEXT,
    "morrendo" TEXT,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "Portrait_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
