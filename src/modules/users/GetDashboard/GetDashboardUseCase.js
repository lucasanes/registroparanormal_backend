const prisma = require("../../database/prisma");
const AppError = require("../../../utils/AppError");

class GetDashboardUseCase {
  async execute({ id }) {

    console.log(id)

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

    const convites = await prisma.convite.findMany({
      where: {
        user: {
          id
        }
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

    return {sessao, ficha, convites};
  }
}

module.exports = GetDashboardUseCase
