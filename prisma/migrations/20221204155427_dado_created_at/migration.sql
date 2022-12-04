-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_dados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "isDano" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fichaId" TEXT,
    "sessaoId" TEXT,
    CONSTRAINT "dados_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "dados_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_dados" ("fichaId", "id", "isDano", "nome", "sessaoId", "valor") SELECT "fichaId", "id", "isDano", "nome", "sessaoId", "valor" FROM "dados";
DROP TABLE "dados";
ALTER TABLE "new_dados" RENAME TO "dados";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
