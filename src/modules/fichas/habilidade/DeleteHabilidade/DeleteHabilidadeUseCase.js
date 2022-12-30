const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteHabilidadeUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const habilidadeAntigo = await prisma.habilidade.findFirst({
      where: {
        id,
      },
    });

    if (!habilidadeAntigo) {
      throw new AppError("Habilidade não existente.");
    }

    await prisma.habilidade.delete({
      where: {
        id,
      },
    });

    return habilidadeAntigo;
  }
}

module.exports = DeleteHabilidadeUseCase;
