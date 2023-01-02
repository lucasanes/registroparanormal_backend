-- CreateTable
CREATE TABLE "fichasRituais" (
    "id" TEXT NOT NULL,
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

    CONSTRAINT "fichasRituais_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fichasRituais" ADD CONSTRAINT "fichasRituais_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
