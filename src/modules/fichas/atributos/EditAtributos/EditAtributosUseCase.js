const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditAtributosUseCase {
  async execute({ id, agi, int, pre, vig, forca }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.atributo.findFirst({
      where: {
        id
      }
    })

    if (agi != null) {
      data.agi = agi
    }

    if (int != null) {
      data.int = int
    }

    if (pre != null) {
      data.pre = pre
    }

    if (vig != null) {
      data.vig = vig
    }

    if (forca != null) {
      data.for = forca
    }

    const AtributosAtt = await prisma.atributo.update({
      where: {
        id
      },
      data: data
    });

    return AtributosAtt;
  }
}

module.exports = EditAtributosUseCase;
