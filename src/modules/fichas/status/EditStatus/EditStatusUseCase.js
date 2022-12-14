const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditStatusUseCase {
  async execute({ id, combate, insano, danoMassivo, inconsciente, pv, pvMax, ps, psMax, pe, peMax, municao, municaoMax }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.status.findFirst({
      where: {
        fichaId: id
      }
    })

    if (combate != null) {
      data.combate = combate
    }

    if (insano != null) {
      data.insano = insano
    }

    if (danoMassivo != null) {
      data.danoMassivo = danoMassivo
    }

    if (inconsciente != null) {
      data.inconsciente = inconsciente
    }

    if (pv != null) {
      data.pv = pv
    }

    if (pvMax != null) {
      data.pvMax = pvMax
    }

    if (ps != null) {
      data.ps = ps
    }

    if (psMax != null) {
      data.psMax = psMax
    }

    if (pe != null) {
      data.pe = pe
    }

    if (peMax != null) {
      data.peMax = peMax
    }

    if (municao != null) {
      data.municao = municao
    }

    if (municaoMax != null) {
      data.municaoMax = municaoMax
    }

    const StatusAtt = await prisma.status.update({
      where: {
        id: data.id
      },
      data: data
    });

    return StatusAtt;
  }
}

module.exports = EditStatusUseCase;
