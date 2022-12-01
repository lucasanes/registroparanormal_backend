const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetAnotacaoBySessaoIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const anotacoes = await prisma.anotacao.findMany({
      where: {
        sessaoId: id,
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    return anotacoes;
  }
}

module.exports = GetAnotacaoBySessaoIdUseCase;
