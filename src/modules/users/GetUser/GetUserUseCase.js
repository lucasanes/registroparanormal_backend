const prisma = require("../../database/prisma");
const AppError = require("../../../utils/AppError");

class GetUserUseCase {
  async execute() {
    const users = await prisma.user.findMany({   
      orderBy: {
        created_at: "desc"
      },
    }); 

    if (users == "") {
      throw new AppError("Não há usuarios cadastrados");
    }

    return users;
  }
}

module.exports = GetUserUseCase;