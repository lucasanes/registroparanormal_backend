const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateIniciativaUseCase {
  async execute({ nome, iniciativa, dano, sessaoId }) {

    const ultimaPosicao = await prisma.iniciativa.findMany({
      where: {
        sessaoId
      }
    });

    if (ultimaPosicao.length == 10) {
      throw new AppError("Você não pode adicionar mais do que 10 iniciativas.")
    }

    const posicao = ultimaPosicao.length + 1;

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
