-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_anotacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessaoId" TEXT NOT NULL,
    CONSTRAINT "anotacoes_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_anotacoes" ("created_at", "descricao", "id", "nome", "sessaoId") SELECT "created_at", "descricao", "id", "nome", "sessaoId" FROM "anotacoes";
DROP TABLE "anotacoes";
ALTER TABLE "new_anotacoes" RENAME TO "anotacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
