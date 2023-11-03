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

    await prisma.ficha.updateMany({
      where: {
        sessaoId: id
      },
      data: {
        sessaoId: null
      }
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
