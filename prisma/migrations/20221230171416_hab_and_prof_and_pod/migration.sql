-- CreateTable
CREATE TABLE "fichasHabilidades" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,

    CONSTRAINT "fichasHabilidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fichasPoderes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,

    CONSTRAINT "fichasPoderes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fichasProficiencias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fichaId" TEXT NOT NULL,

    CONSTRAINT "fichasProficiencias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fichasHabilidades" ADD CONSTRAINT "fichasHabilidades_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasPoderes" ADD CONSTRAINT "fichasPoderes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasProficiencias" ADD CONSTRAINT "fichasProficiencias_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
