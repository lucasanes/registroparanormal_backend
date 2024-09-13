const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EnviarItemUseCase {
  async execute({ id, sessaoId, fichaId }) {
    const itemAlreadyExists = await prisma.item.findFirst({
      where: {
        id,
      },
    });

    if (!itemAlreadyExists) {
      throw new AppError("Não existe nenhum item com o ID passado.");
    }

    if (fichaId) {

      const fichaIdAlreadyExists = await prisma.ficha.findFirst({
        where: {
          id: fichaId,
        },
      });

      if (!fichaIdAlreadyExists) {
        throw new AppError("Não existe nenhuma ficha com o ID passado.");
      }

      const data = await prisma.item.update({
        where: {
          id
        },
        data: {
          fichaId,
          sessaoId: null,
        },
      });

      return data;

    }

    if (sessaoId) {
      const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
        where: {
          id: sessaoId,
        },
      });

      if (!sessaoIdAlreadyExists) {
        throw new AppError("Não existe nenhuma sessão com o ID passado.");
      }

      const data = await prisma.item.update({
        where: {
          id
        },
        data: {
          fichaId: null,
          sessaoId,
        },
      });

      return data;
    }
  }
}

module.exports = EnviarItemUseCase;
