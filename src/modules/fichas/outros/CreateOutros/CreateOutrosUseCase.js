const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateHabilidadeUseCase {
  async execute({ inventario, habilidades, detalhes, fichaId }) {

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

    const data = await prisma.outros.create({
      data: {
        inventario,
        habilidades,
        detalhes,
        fichaId
      },
    });

    return data;
  }
}

module.exports = CreateHabilidadeUseCase;
