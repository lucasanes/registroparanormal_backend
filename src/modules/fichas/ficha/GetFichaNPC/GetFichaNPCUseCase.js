const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetFichaByUserIdUseCase {
  async execute({ userId, sessaoId }) {

    if (!userId) {
      throw new AppError("ID não existente.")
    }

    const ficha = await prisma.ficha.findMany({
      where: {
        userId: userId,
        sessaoId: sessaoId
      },
      include: {
        Principal: true,
        Atributos: true,
        Status: true,
        Pericias: true,
        Defesas: true,
        Outros: true
      }
    });

    if (!ficha) {
      throw new AppError("Ficha não existente.")
    }

    return ficha;
  }
}

module.exports = GetFichaByUserIdUseCase;