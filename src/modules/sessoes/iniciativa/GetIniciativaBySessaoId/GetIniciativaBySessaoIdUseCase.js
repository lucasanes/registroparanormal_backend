const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetIniciativaBySessaoIdUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const iniciativas = await prisma.iniciativa.findMany({
      where: {
        sessaoId: id,
      },
      orderBy: {
        posicao: 'asc'
      }
    });

    return iniciativas;
  }
}

module.exports = GetIniciativaBySessaoIdUseCase;
