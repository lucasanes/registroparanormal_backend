const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateAnotacaoUseCase {
  async execute({ nome, descricao, sessaoId }) {

    const ultimaPosicao = await prisma.anotacao.count();

    if (ultimaPosicao == 5) {
      throw new AppError("Você não pode adicionar mais do que 5 anotações.")
    } 

    const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
      where: {
        id: sessaoId,
      },
    });

    if (!sessaoIdAlreadyExists) {
      throw new AppError("Não existe nenhuma sessão com o ID passado.");
    }

    const data = await prisma.anotacao.create({
      data: {
        nome, 
        descricao,
        sessaoId
      },
    });

    return data;
  }
}

module.exports = CreateAnotacaoUseCase;
