/*
  Warnings:

  - Added the required column `sessaoId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "espaco" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL,
    "imagem" TEXT,
    "sessaoId" TEXT NOT NULL,
    CONSTRAINT "Item_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("categoria", "descricao", "espaco", "id", "imagem", "nome") SELECT "categoria", "descricao", "espaco", "id", "imagem", "nome" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
