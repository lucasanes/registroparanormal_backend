const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetSessaoByUserIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const sessao = await prisma.sessao.findMany({
      where: {
        userId: id,
      },
      include: {
        Participantes: {
          include: {
            user: {
              select: {
                nome: true
              }
            }
          }
        }
      }
    });

    return sessao;
  }
}

module.exports = GetSessaoByUserIdUseCase
