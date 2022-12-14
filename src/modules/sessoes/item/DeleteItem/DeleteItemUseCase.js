const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteItemUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const itemAntigo = await prisma.item.findFirst({
      where: {
        id,
      },
    });

    if (!itemAntigo) {
      throw new AppError("Anotação não existente.");
    }

    await prisma.item.delete({
      where: {
        id,
      },
    });

    return itemAntigo;
  }
}

module.exports = DeleteItemUseCase;
