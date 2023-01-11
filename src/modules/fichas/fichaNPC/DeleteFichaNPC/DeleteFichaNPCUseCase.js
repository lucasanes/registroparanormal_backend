const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteFichaNPCUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const fichaNPC = await prisma.fichaNPC.findFirst({
      where: {
        id,
      },
    });

    if (!fichaNPC) {
      throw new AppError("Dado não existente.");
    }

    await prisma.fichaNPC.delete({
      where: {
        id,
      },
    });

    return fichaNPC;
  }
}

module.exports = DeleteFichaNPCUseCase;
