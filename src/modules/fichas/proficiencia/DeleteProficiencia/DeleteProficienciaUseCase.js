const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteProficienciaUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const proficienciaAntigo = await prisma.proficiencia.findFirst({
      where: {
        id,
      },
    });

    if (!proficienciaAntigo) {
      throw new AppError("Proficiencia não existente.");
    }

    await prisma.proficiencia.delete({
      where: {
        id,
      },
    });

    return proficienciaAntigo;
  }
}

module.exports = DeleteProficienciaUseCase;
