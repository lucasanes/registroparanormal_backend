const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class EditFichaNPCMonstroStatusUseCase {
  async execute({
    id,

    pv,
    pvMax,

  }) {

    if (!id) {
      throw new AppError("ID não passado.")
    }

    const data = await prisma.fichaNPCMonstro.findFirst({
      where: {
        id
      }
    })

    if (!data) {
      throw new AppError("Não existe nenhum Monstro com o ID passado.")
    }

    data.pv = pv
    data.pvMax = pvMax

    const ficha = await prisma.fichaNPCMonstro.update({
      where: {
        id: data.id
      },

      data: data,
    });

    return ficha;
  }
}

module.exports = EditFichaNPCMonstroStatusUseCase;
