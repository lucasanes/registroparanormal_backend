const prisma = require("../../database/prisma");
const AppError = require("../../../utils/AppError");

class DeleteUserUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const userAntigo = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userAntigo) {
      throw new AppError("Usuário não existente.");
    }

    await prisma.user.delete({
      where: {
        id,
      },
    });

    return userAntigo;
  }
}

module.exports = DeleteUserUseCase;
