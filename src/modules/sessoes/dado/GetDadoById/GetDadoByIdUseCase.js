const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetDadoByIdUseCase {
  async execute({id}) {
    if (!id) {
      throw new AppError("ID não existente.")
    }

    const dado = await prisma.dadoSessao.findFirst({
      where: {
        userId: id,
      },
    });

    if (!dado) {
      throw new AppError("Dado não existente.")
    }

    return dado;
  }
}

module.exports = GetDadoByIdUseCase;