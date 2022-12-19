const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class DeleteParticipanteByFichaIdUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const participanteAntigo = await prisma.participante.findFirst({
      where: {
        id,
      },
    });

    if (!participanteAntigo) {
      throw new AppError("Anotação não existente.");
    }

    await prisma.participante.delete({
      where: {
        id,
      },
    });

    return participanteAntigo;
  }
}

module.exports = DeleteParticipanteByFichaIdUseCase;
