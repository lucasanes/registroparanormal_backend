const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetFichaBySessaoIdUseCase {
  async execute({id}) {
    if (!id) {
      throw new AppError("ID não existente.")
    }

    const ficha = await prisma.ficha.findMany({
      where: {
        sessaoId: id,
      },
    });

    if (ficha.length == 0) {
      throw new AppError("Este sessão não tem fichas.")
    }

    return ficha;
  }
}

module.exports = GetFichaBySessaoIdUseCase;