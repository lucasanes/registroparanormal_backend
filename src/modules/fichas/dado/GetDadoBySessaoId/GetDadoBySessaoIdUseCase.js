const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetDadoBySessaoIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const dados = await prisma.dado.findMany({
      where: {
        fichaId: id
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    return dados;
  }
}

module.exports = GetDadoBySessaoIdUseCase;
