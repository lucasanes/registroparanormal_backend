const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteFichaNPCMonstroUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const fichaNPCMonstro = await prisma.fichaNPCMonstro.findFirst({
      where: {
        id,
      },
    });

    if (!fichaNPCMonstro) {
      throw new AppError("Dado não existente.");
    }

    await prisma.fichaNPCMonstro.delete({
      where: {
        id,
      },
    });

    return fichaNPCMonstro;
  }
}

module.exports = DeleteFichaNPCMonstroUseCase;
