const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteDadoUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const dadoAntigo = await prisma.dado.findFirst({
      where: {
        id,
      },
    });

    if (!dadoAntigo) {
      throw new AppError("Dado não existente.");
    }

    await prisma.dado.delete({
      where: {
        id,
      },
    });

    return dadoAntigo;
  }
}

module.exports = DeleteDadoUseCase;
