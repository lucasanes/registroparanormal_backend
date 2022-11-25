const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetSessaoByUserIdUseCase {
  async execute({id}) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const sessao = await prisma.sessao.findMany({
      where: {
        userId: id,
      },
      include: {
        Participantes: {
          select: {
            username: true
          }
        }
      }
    });

    if (sessao.length == 0) {
      throw new AppError("Este usuário não tem sessões existentes.")
    }

    return sessao;
  }
}

module.exports = GetSessaoByUserIdUseCase
