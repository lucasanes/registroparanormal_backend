const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteSessaoUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const sessaoAntiga = await prisma.sessao.findFirst({
      where: {
        id,
      },
    });

    if (!sessaoAntiga) {
      throw new AppError("Usuário não existente.");
    }

    const fichas = await prisma.ficha.findMany({
      where: {
        sessaoId: id
      }
    })

    fichas.forEach(async (each) => {
      
      const ficha = await prisma.ficha.update({
        data: {
          sessaoId: null
        }
      })

    })

    await prisma.sessao.delete({
      where: {
        id,
      },
    });

    return sessaoAntiga;
  }
}

module.exports = DeleteSessaoUseCase;
