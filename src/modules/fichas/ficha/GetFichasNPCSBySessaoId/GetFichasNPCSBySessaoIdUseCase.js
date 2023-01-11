const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetFichasNPCSBySessaoIdUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.")
    }

    const npcs = await prisma.fichaNPC.findMany({
      where: {
        sessaoId: id,
      },
      orderBy: {
        nome: 'asc'
      }
    });

    const npcsMonstros = await prisma.fichaNPCMonstro.findMany({
      where: {
        sessaoId: id,
      },
      orderBy: {
        nome: 'asc'
      }
    });

    return { npcs, npcsMonstros };
  }
}

module.exports = GetFichasNPCSBySessaoIdUseCase;