const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetSessaoByIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const sessao = await prisma.sessao.findFirst({
      where: {
        id,
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
        },
        Fichas: {
          include: {
            Principal: true,
            Atributos: true,
            Armas: true,
            Itens: true,
            Status: true,
            Pericias: true,
            Portrait: true,
            Defesas: true
          }
        },
        FichasNPC: {
          orderBy: {
            nome: 'asc'
          }
        },
        Monstros: {
          orderBy: {
            nome: 'asc'
          }
        }
      }
    });

    if (!sessao) {
      throw new AppError("Sessão não existente.")
    }

    return sessao;
  }
}

module.exports = GetSessaoByIdUseCase
