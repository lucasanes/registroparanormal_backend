const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteConviteUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const conviteAntigo = await prisma.convite.findFirst({
      where: {
        id,
      },
    });

    if (!conviteAntigo) {
      throw new AppError("Convite não existente.");
    }

    await prisma.convite.delete({
      where: {
        id,
      },
    });

    return conviteAntigo;
  }
}

module.exports = DeleteConviteUseCase;
