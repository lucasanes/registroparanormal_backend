const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class EditFichaNPCUseCase {
  async execute({
    id,

    pv,
    ps,
    pe,
    pvMax,
    psMax,
    peMax,

  }) {

    if (!id) {
      throw new AppError('ID não passado.')
    }

    const data = await prisma.fichaNPC.findFirst({
      where: {
        id
      }
    })

    if (!data) {
      throw new AppError("Não existe nenhum NPC com o ID passado.")
    }

    data.pv = pv
    data.ps = ps
    data.pe = pe

    data.pvMax = pvMax
    data.psMax = psMax
    data.peMax = peMax

    const ficha = await prisma.fichaNPC.update({
      where: {
        id: data.id
      },
      data: data,
    });

    return ficha;
  }
}

module.exports = EditFichaNPCUseCase;
