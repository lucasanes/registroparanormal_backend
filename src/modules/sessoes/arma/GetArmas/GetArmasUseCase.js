const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetArmasUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const armas = await prisma.arma.findMany({
      where: {
        sessaoId: id,
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    return armas;
  }
}

module.exports = GetArmasUseCase;
