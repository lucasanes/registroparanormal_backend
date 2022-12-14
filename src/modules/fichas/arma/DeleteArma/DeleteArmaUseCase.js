const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteArmaUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const armaAntiga = await prisma.arma.findFirst({
      where: {
        id,
      },
    });

    if (!armaAntiga) {
      throw new AppError("Anotação não existente.");
    }

    await prisma.arma.delete({
      where: {
        id,
      },
    });

    return armaAntiga;
  }
}

module.exports = DeleteArmaUseCase;
