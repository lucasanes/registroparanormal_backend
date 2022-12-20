const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditFichaUseCase {
  async execute({ id, isPublic, userId, sessaoId }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.ficha.findFirst({
      where: {
        id
      },
    });

    if (!data) {
      throw new AppError("Ficha não existente.");
    }

    if (isPublic != null) {
      data.isPublic = isPublic
    } else {
      data.isPublic = data.isPublic
    }

    if (userId != undefined && userId != '') {
      data.userId = userId
    } else {
      data.userId = data.userId
    }

    if (sessaoId != undefined && sessaoId != '') {
      data.sessaoId = sessaoId
    } else {
      data.sessaoId = null
    }

    const fichaAtualizada = await prisma.ficha.update({
      where: {
        id: data.id
      },
      data: data
    });

    return fichaAtualizada;
  }
}

module.exports = EditFichaUseCase;
