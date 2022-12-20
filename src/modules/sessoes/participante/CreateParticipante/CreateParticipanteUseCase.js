const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateParticipanteUseCase {
  async execute({ userId, fichaId, sessaoId }) {

    const userIdAlreadyExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userIdAlreadyExists) {
      throw new AppError("Não existe nenhum usuário com o ID passado.");
    }

    const fichaIdAlreadyExists = await prisma.ficha.findFirst({
      where: {
        id: fichaId,
      },
    });

    if (!fichaIdAlreadyExists) {
      throw new AppError("Não existe nenhuma ficha com o ID passado.");
    }

    const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
      where: {
        id: sessaoId,
      },
    });

    if (!sessaoIdAlreadyExists) {
      throw new AppError("Não existe nenhuma sessão com o ID passado.");
    }

    const data = await prisma.participante.create({
      data: {
        userId,
        fichaId,
        sessaoId
      },
    });

    return data;
  }
}

module.exports = CreateParticipanteUseCase;
