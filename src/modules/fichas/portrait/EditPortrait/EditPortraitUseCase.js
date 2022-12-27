const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditPrincipalUseCase {
  async execute({ id, normal, ferido, insano, insanoeferido, morrendo, insanoemorrendo }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.portrait.findFirst({
      where: {
        id
      }
    })

    if (normal != null && normal != '') {
      data.normal = normal
    } else {
      data.normal = null
    }

    if (ferido != null && ferido != '') {
      data.ferido = ferido
    } else {
      data.ferido = null
    }

    if (insano != null && insano != '') {
      data.insano = insano
    } else {
      data.insano = null
    }

    if (insanoeferido != null && insanoeferido != '') {
      data.insanoeferido = insanoeferido
    } else {
      data.insanoeferido = null
    }

    if (morrendo != null && morrendo != '') {
      data.morrendo = morrendo
    } else {
      data.morrendo = null
    }

    if (insanoemorrendo != null && insanoemorrendo != '') {
      data.insanoemorrendo = insanoemorrendo
    } else {
      data.insanoemorrendo = null
    }

    const portraitAtt = await prisma.portrait.update({
      where: {
        id: data.id
      },
      data: data
    });

    return portraitAtt;
  }
}

module.exports = EditPrincipalUseCase;
