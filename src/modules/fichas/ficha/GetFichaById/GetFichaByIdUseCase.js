const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetFichaByIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const ficha = await prisma.ficha.findFirst({
      where: {
        id,
      },
      include: {
        sessao: {
          select: {
            userId: true,
            Fichas: {
              select: {
                id: true,
                userId: true,
                Principal: {
                  select: {
                    nome: true
                  }
                }
              }
            }
          }
        },
        Principal: true,
        Atributos: true,
        Status: true,
        Pericias: true,
        Personagem: true,
        Defesas: true,
        Portrait: true,
        Habilidades: true,
        Poderes: true,
        Proficiencias: true,
        Dados: true,
        Rituais: {
          orderBy: {
            circulo: 'desc'
          }
        },
        Armas: {
          orderBy: {
            categoria: 'desc'
          }
        },
        Itens: {
          orderBy: {
            categoria: 'desc'
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

module.exports = GetFichaByIdUseCase
