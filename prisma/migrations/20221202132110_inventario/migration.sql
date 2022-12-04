-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "espaco" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Arma" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "ataque" TEXT NOT NULL,
    "dano" TEXT NOT NULL,
    "margemCritico" INTEGER NOT NULL,
    "danoCritico" TEXT NOT NULL,
    "recarga" TEXT,
    "alcance" TEXT NOT NULL,
    "especial" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "espaco" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL
);
