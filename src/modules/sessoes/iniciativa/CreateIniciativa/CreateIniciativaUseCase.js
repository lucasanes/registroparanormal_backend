const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateIniciativaUseCase {
  async execute({ nome, iniciativa, dano, sessaoId }) {
    const ultimaPosicao = await prisma.iniciativa.count();

    if (ultimaPosicao == 10) {
      throw new AppError("Você não pode adicionar mais do que 10 iniciativas.")
    } 

    const posicao = ultimaPosicao + 1;

    const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
      where: {
        id: sessaoId,
      },
    });

    if (!sessaoIdAlreadyExists) {
      throw new AppError("Não existe nenhuma sessão com o ID passado.");
    }

    const data = await prisma.iniciativa.create({
      data: {
        posicao,
        nome,
        iniciativa,
        dano,
        sessaoId,
      },
    });

    return data;
  }
}

module.exports = CreateIniciativaUseCase;
