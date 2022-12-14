-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_fichasPersonagem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "historia" TEXT,
    "aparencia" TEXT,
    "pep" TEXT,
    "dfm" TEXT,
    "favoritos" TEXT,
    "personalidade" TEXT,
    "piorpesadelo" TEXT,
    "anotacoesPlayer" TEXT,
    "anotacoesPersonagem" TEXT,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasPersonagem_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_fichasPersonagem" ("anotacoesPersonagem", "anotacoesPlayer", "aparencia", "dfm", "favoritos", "fichaId", "historia", "id", "pep", "personalidade", "piorpesadelo") SELECT "anotacoesPersonagem", "anotacoesPlayer", "aparencia", "dfm", "favoritos", "fichaId", "historia", "id", "pep", "personalidade", "piorpesadelo" FROM "fichasPersonagem";
DROP TABLE "fichasPersonagem";
ALTER TABLE "new_fichasPersonagem" RENAME TO "fichasPersonagem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
