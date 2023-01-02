const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteRitualUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const ritualAntiga = await prisma.ritual.findFirst({
      where: {
        id,
      },
    });

    if (!ritualAntiga) {
      throw new AppError("Ritual não existente.");
    }

    await prisma.ritual.delete({
      where: {
        id,
      },
    });

    return ritualAntiga;
  }
}

module.exports = DeleteRitualUseCase;
