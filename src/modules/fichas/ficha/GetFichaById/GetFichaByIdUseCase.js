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
        Rituais: true,
        Armas: true,
        Itens: true
      }
    });

    if (!ficha) {
      throw new AppError("Ficha não existente.")
    }

    return ficha;
  }
}

module.exports = GetFichaByIdUseCase
