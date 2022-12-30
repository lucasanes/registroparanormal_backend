const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeletePoderUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const poderAntigo = await prisma.poder.findFirst({
      where: {
        id,
      },
    });

    if (!poderAntigo) {
      throw new AppError("Poder não existente.");
    }

    await prisma.poder.delete({
      where: {
        id,
      },
    });

    return poderAntigo;
  }
}

module.exports = DeletePoderUseCase;
