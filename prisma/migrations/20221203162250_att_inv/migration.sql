-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "espaco" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL,
    "imagem" TEXT
);
INSERT INTO "new_Item" ("categoria", "descricao", "espaco", "id", "imagem", "nome") SELECT "categoria", "descricao", "espaco", "id", "imagem", "nome" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_Arma" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "ataque" TEXT NOT NULL,
    "dano" TEXT NOT NULL,
    "margemCritico" INTEGER NOT NULL,
    "danoCritico" TEXT NOT NULL,
    "recarga" TEXT,
    "alcance" TEXT,
    "especial" TEXT,
    "descricao" TEXT,
    "espaco" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL,
    "imagem" TEXT
);
INSERT INTO "new_Arma" ("alcance", "ataque", "categoria", "dano", "danoCritico", "descricao", "espaco", "especial", "id", "imagem", "margemCritico", "nome", "recarga", "tipo") SELECT "alcance", "ataque", "categoria", "dano", "danoCritico", "descricao", "espaco", "especial", "id", "imagem", "margemCritico", "nome", "recarga", "tipo" FROM "Arma";
DROP TABLE "Arma";
ALTER TABLE "new_Arma" RENAME TO "Arma";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
