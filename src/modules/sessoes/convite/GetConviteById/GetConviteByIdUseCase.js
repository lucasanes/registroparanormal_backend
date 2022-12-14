const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetConviteByIdUseCase {
  async execute({ id }) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const convitee = await prisma.convite.findFirst({
      where: {
        id
      }
    });

    return convitee;
  }
}

module.exports = GetConviteByIdUseCase
