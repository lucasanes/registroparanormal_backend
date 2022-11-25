const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteFichaUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const fichaAntiga = await prisma.ficha.findFirst({
      where: {
        id,
      },
    });

    if (!fichaAntiga) {
      throw new AppError("Ficha não existente.");
    }

    await prisma.ficha.delete({
      where: {
        id,
      },
    });

    return fichaAntiga;
  }
}

module.exports = DeleteFichaUseCase;
