-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "fichas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "sessaoId" TEXT,
    CONSTRAINT "fichas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "fichas_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sessoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "sessoes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "participantes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessaoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    CONSTRAINT "participantes_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "participantes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "participantes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "anotacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessaoId" TEXT NOT NULL,
    CONSTRAINT "anotacoes_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "iniciativas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "posicao" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "iniciativa" INTEGER NOT NULL,
    "dano" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessaoId" TEXT NOT NULL,
    CONSTRAINT "iniciativas_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "dados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "isDano" BOOLEAN NOT NULL,
    "fichaId" TEXT,
    "sessaoId" TEXT,
    CONSTRAINT "dados_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "dados_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
