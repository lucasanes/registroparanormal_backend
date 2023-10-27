const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetConviteUseCase {
  async execute({ email }) {

    if (!email) {
      throw new AppError("Email não existente.")
    }

    const convites = await prisma.convite.findMany({
      where: {
        userEmail: email
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

    return convites;
  }
}

module.exports = GetConviteUseCase
