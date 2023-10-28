const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetFichaByUserIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const ficha = await prisma.ficha.findMany({
      where: {
        userId: id
      },
      include: {
        Principal: true,
        Portrait: true,
        sessao: {
          select: {
            nome: true
          }
        }
      }
    });

    if (!ficha) {
      throw new AppError("Ficha não existente.")
    }

    return ficha;
  }
}

module.exports = GetFichaByUserIdUseCase;