const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetConviteByIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const convitee = await prisma.convite.findFirst({
      where: {
        id
      },
      include: {
        sessao: {
          select: {
            nome: true,
            descricao: true,
            Participantes: true
          }
        },
        user: {
          select: {
            nome: true
          }
        }
      }
    });

    return convitee;
  }
}

module.exports = GetConviteByIdUseCase
