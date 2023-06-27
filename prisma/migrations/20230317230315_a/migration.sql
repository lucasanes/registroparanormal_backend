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
    CONSTRAINT "participantes_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "participantes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "participantes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "convites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessaoId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "convites_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "convites_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "anotacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
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
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fichaId" TEXT,
    "sessaoId" TEXT,
    CONSTRAINT "dados_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "dados_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "itens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "espaco" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL,
    "imagem" TEXT,
    "isMunicao" BOOLEAN,
    "municao" INTEGER,
    "municaoMax" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessaoId" TEXT,
    "fichaId" TEXT,
    CONSTRAINT "itens_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "itens_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "armas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "dano" TEXT NOT NULL,
    "margemCritico" INTEGER NOT NULL,
    "danoCritico" TEXT NOT NULL,
    "recarga" INTEGER,
    "alcance" TEXT NOT NULL,
    "especial" TEXT,
    "descricao" TEXT,
    "espaco" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL,
    "municao" INTEGER,
    "imagem" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessaoId" TEXT,
    "fichaId" TEXT,
    CONSTRAINT "armas_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "armas_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "sessaoId" TEXT,
    CONSTRAINT "fichas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "fichas_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasNPCs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "deslocamento" INTEGER NOT NULL,
    "nex" INTEGER NOT NULL,
    "trilha" TEXT,
    "patente" TEXT,
    "peso" INTEGER NOT NULL,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vig" INTEGER NOT NULL,
    "pre" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "ps" INTEGER NOT NULL,
    "psMax" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "peMax" INTEGER NOT NULL,
    "acrobacia" INTEGER,
    "adestramento" INTEGER,
    "arte" INTEGER,
    "atletismo" INTEGER,
    "atualidade" INTEGER,
    "ciencia" INTEGER,
    "crime" INTEGER,
    "diplomacia" INTEGER,
    "enganacao" INTEGER,
    "fortitude" INTEGER,
    "furtividade" INTEGER,
    "iniciativa" INTEGER,
    "intimidacao" INTEGER,
    "intuicao" INTEGER,
    "investigacao" INTEGER,
    "luta" INTEGER,
    "medicina" INTEGER,
    "ocultismo" INTEGER,
    "percepcao" INTEGER,
    "pilotagem" INTEGER,
    "pontaria" INTEGER,
    "profissao" INTEGER,
    "reflexo" INTEGER,
    "religiao" INTEGER,
    "sobrevivencia" INTEGER,
    "tatica" INTEGER,
    "tecnologia" INTEGER,
    "vontade" INTEGER,
    "passiva" INTEGER,
    "esquiva" INTEGER,
    "bloqueio" INTEGER,
    "mental" INTEGER,
    "morte" INTEGER,
    "conhecimento" INTEGER,
    "sangue" INTEGER,
    "energia" INTEGER,
    "fisica" INTEGER,
    "balistica" INTEGER,
    "corte" INTEGER,
    "impacto" INTEGER,
    "perfuracao" INTEGER,
    "eletricidade" INTEGER,
    "fogo" INTEGER,
    "frio" INTEGER,
    "quimica" INTEGER,
    "inventario" TEXT,
    "ataques" TEXT,
    "habilidades" TEXT,
    "detalhes" TEXT,
    "sessaoId" TEXT,
    CONSTRAINT "fichasNPCs_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasNPCsMonstros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT NOT NULL,
    "deslocamento" INTEGER NOT NULL,
    "nex" INTEGER NOT NULL,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vig" INTEGER NOT NULL,
    "pre" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "acrobacia" INTEGER,
    "adestramento" INTEGER,
    "arte" INTEGER,
    "atletismo" INTEGER,
    "atualidade" INTEGER,
    "ciencia" INTEGER,
    "crime" INTEGER,
    "diplomacia" INTEGER,
    "enganacao" INTEGER,
    "fortitude" INTEGER,
    "furtividade" INTEGER,
    "iniciativa" INTEGER,
    "intimidacao" INTEGER,
    "intuicao" INTEGER,
    "investigacao" INTEGER,
    "luta" INTEGER,
    "medicina" INTEGER,
    "ocultismo" INTEGER,
    "percepcao" INTEGER,
    "pilotagem" INTEGER,
    "pontaria" INTEGER,
    "profissao" INTEGER,
    "reflexo" INTEGER,
    "religiao" INTEGER,
    "sobrevivencia" INTEGER,
    "tatica" INTEGER,
    "tecnologia" INTEGER,
    "vontade" INTEGER,
    "passiva" INTEGER,
    "esquiva" INTEGER,
    "bloqueio" INTEGER,
    "mental" INTEGER,
    "morte" INTEGER,
    "conhecimento" INTEGER,
    "sangue" INTEGER,
    "energia" INTEGER,
    "fisica" INTEGER,
    "balistica" INTEGER,
    "corte" INTEGER,
    "impacto" INTEGER,
    "perfuracao" INTEGER,
    "eletricidade" INTEGER,
    "fogo" INTEGER,
    "frio" INTEGER,
    "quimica" INTEGER,
    "ataques" TEXT,
    "habilidades" TEXT,
    "detalhes" TEXT,
    "sessaoId" TEXT,
    CONSTRAINT "fichasNPCsMonstros_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasPrincipal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "jogador" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "peprod" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "idadeAdicional" INTEGER,
    "deslocamento" INTEGER NOT NULL,
    "nex" INTEGER NOT NULL,
    "trilha" TEXT,
    "patente" TEXT NOT NULL,
    "fichaId" TEXT,
    CONSTRAINT "fichasPrincipal_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasAtributo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vig" INTEGER NOT NULL,
    "pre" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasAtributo_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "combate" BOOLEAN NOT NULL,
    "insano" BOOLEAN NOT NULL,
    "danoMassivo" BOOLEAN NOT NULL,
    "inconsciente" BOOLEAN NOT NULL,
    "pv" INTEGER NOT NULL,
    "pvMax" INTEGER NOT NULL,
    "ps" INTEGER NOT NULL,
    "psMax" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "peMax" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasStatus_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasPericias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "acrobacia" INTEGER,
    "adestramento" INTEGER,
    "arte" INTEGER,
    "atletismo" INTEGER,
    "atualidade" INTEGER,
    "ciencia" INTEGER,
    "crime" INTEGER,
    "diplomacia" INTEGER,
    "enganacao" INTEGER,
    "fortitude" INTEGER,
    "furtividade" INTEGER,
    "iniciativa" INTEGER,
    "intimidacao" INTEGER,
    "intuicao" INTEGER,
    "investigacao" INTEGER,
    "luta" INTEGER,
    "medicina" INTEGER,
    "ocultismo" INTEGER,
    "percepcao" INTEGER,
    "pilotagem" INTEGER,
    "pontaria" INTEGER,
    "profissao" INTEGER,
    "reflexo" INTEGER,
    "religiao" INTEGER,
    "sobrevivencia" INTEGER,
    "tatica" INTEGER,
    "tecnologia" INTEGER,
    "vontade" INTEGER,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasPericias_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasDefesas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "passiva" INTEGER,
    "esquiva" INTEGER,
    "bloqueio" INTEGER,
    "mental" INTEGER,
    "morte" INTEGER,
    "conhecimento" INTEGER,
    "sangue" INTEGER,
    "energia" INTEGER,
    "fisica" INTEGER,
    "balistica" INTEGER,
    "corte" INTEGER,
    "impacto" INTEGER,
    "perfuracao" INTEGER,
    "eletricidade" INTEGER,
    "fogo" INTEGER,
    "frio" INTEGER,
    "quimica" INTEGER,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasDefesas_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasPersonagem" (
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

-- CreateTable
CREATE TABLE "fichasPortrait" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "normal" TEXT,
    "ferido" TEXT,
    "morrendo" TEXT,
    "insano" TEXT,
    "insanoeferido" TEXT,
    "insanoemorrendo" TEXT,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasPortrait_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasHabilidades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasHabilidades_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasPoderes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasPoderes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasProficiencias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasProficiencias_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fichasRituais" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "circulo" INTEGER NOT NULL,
    "alcance" TEXT NOT NULL,
    "elemento" TEXT NOT NULL,
    "execucao" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,
    "alvo" TEXT NOT NULL,
    "resistencia" TEXT,
    "normal" TEXT,
    "discente" TEXT,
    "verdadeiro" TEXT,
    "descricao" TEXT,
    "imagem" TEXT,
    "fichaId" TEXT NOT NULL,
    CONSTRAINT "fichasRituais_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
