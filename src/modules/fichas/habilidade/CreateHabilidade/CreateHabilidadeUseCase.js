const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateHabilidadeUseCase {
  async execute({ nome, descricao, fichaId }) {

    if (fichaId != undefined && fichaId != '') {

      const fichaIdAlreadyExists = await prisma.ficha.findFirst({
        where: {
          id: fichaId,
        },
      });

      if (!fichaIdAlreadyExists) {
        throw new AppError("Não existe nenhuma ficha com o ID passado.");
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const data = await prisma.habilidade.create({
      data: {
        nome,
        descricao,
        fichaId
      },
    });

    return data;
  }
}

module.exports = CreateHabilidadeUseCase;
