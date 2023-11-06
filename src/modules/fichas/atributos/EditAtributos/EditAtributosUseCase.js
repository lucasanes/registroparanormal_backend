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
    } else {
      if (agi == 0) {
        data.agi = 0
      }
    }

    if (int != null) {
      data.int = int
    } else {
      if (int == 0) {
        data.int = 0
      }
    }

    if (pre != null) {
      data.pre = pre
    } else {
      if (pre == 0) {
        data.pre = 0
      }
    }

    if (vig != null) {
      data.vig = vig
    } else {
      if (vig == 0) {
        data.vig = 0
      }
    }

    if (forca != null) {
      data.for = forca
    } else {
      if (forca == 0) {
        data.for = 0
      }
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
