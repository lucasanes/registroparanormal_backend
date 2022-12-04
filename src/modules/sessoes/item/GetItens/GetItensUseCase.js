const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetItensUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const itens = await prisma.item.findMany({
      where: {
        sessaoId: id,
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    return itens;
  }
}

module.exports = GetItensUseCase;
