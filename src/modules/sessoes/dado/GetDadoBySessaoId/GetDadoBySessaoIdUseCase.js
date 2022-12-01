const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetDadoBySessaoIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const dados = await prisma.dado.findMany({
      where: {
        sessaoId: id,
      }
    });

    return dados;
  }
}

module.exports = GetDadoBySessaoIdUseCase;
