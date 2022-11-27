const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteIniciativaUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const iniciativaAntiga = await prisma.iniciativa.findFirst({
      where: {
        id,
      },
    });

    if (!iniciativaAntiga) {
      throw new AppError("Iniciativa não existente.");
    }

    await prisma.iniciativa.delete({
      where: {
        id,
      },
    });

    return iniciativaAntiga;
  }
}

module.exports = DeleteIniciativaUseCase;
