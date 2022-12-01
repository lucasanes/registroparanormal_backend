const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteAnotacaoUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    console.log(id)

    const anotacaoAntiga = await prisma.anotacao.findFirst({
      where: {
        id,
      },
    });

    if (!anotacaoAntiga) {
      throw new AppError("Anotação não existente.");
    }

    await prisma.anotacao.delete({
      where: {
        id,
      },
    });

    return anotacaoAntiga;
  }
}

module.exports = DeleteAnotacaoUseCase;
