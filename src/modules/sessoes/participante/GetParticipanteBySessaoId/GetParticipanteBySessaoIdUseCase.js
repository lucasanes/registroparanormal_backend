const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetParticipanteBySessaoIdUseCase {
  async execute({id}) {
    if (!id) {
      throw new AppError("ID não existente.")
    }

    const participantes = await prisma.participante.findMany({
      where: {
        sessaoId: id,
      },
    });

    return participantes;
  }
}

module.exports = GetParticipanteBySessaoIdUseCase;