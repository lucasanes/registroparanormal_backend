const prisma = require("../../../database/prisma");
const AppError = require("../../../../utils/AppError");

class GetSessaoUseCase {
  async execute() {
    const sessaos = await prisma.sessao.findMany({   
      orderBy: {
        created_at: "desc"
      },
    }); 

    if (sessaos == "") {
      throw new AppError("Não há sessões cadastradas.");
    }           

    return sessaos;
  }
}

module.exports = GetSessaoUseCase;