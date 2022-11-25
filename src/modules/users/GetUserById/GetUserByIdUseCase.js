const prisma = require("../../database/prisma");
const AppError = require("../../../utils/AppError");

class GetUserByIdUseCase {
  async execute({id}) {

    if (!id) {
      throw new AppError("ID não existente.")
    }

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new AppError("Usuário não existente.")
    }

    return user;
  }
}

module.exports = GetUserByIdUseCase
