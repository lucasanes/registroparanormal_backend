const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EnviarArmaUseCase {
  async execute({ id, sessaoId, fichaId }) {

    const armaIdAlreadyExists = await prisma.arma.findFirst({
      where: {
        id,
      },
    });

    if (!armaIdAlreadyExists) {
      throw new AppError("Não existe nenhuma arma com o ID passado.");
    }

    if (fichaId) {

      const fichaIdAlreadyExists = await prisma.ficha.findFirst({
        where: {
          id: fichaId,
        },
      });

      if (!fichaIdAlreadyExists) {
        throw new AppError("Não existe nenhuma sessão com o ID passado.");
      }

      const data = await prisma.arma.update({
        where: {
          id
        },
        data: {
          fichaId,
          sessaoId: null
        },
      });

      return data

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

      const data = await prisma.arma.update({
        where: {
          id
        },
        data: {
          sessaoId,
          fichaId: null
        },
      });

      return data
    }
  }
}

module.exports = EnviarArmaUseCase;
