const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateProficienciaUseCase {
  async execute({ nome, fichaId }) {

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

    if (nome != undefined && nome != '') {
      if (nome.length < 3) {
        throw new AppError('O nome de sua proficiência deve ter no mínimo 3 caracteres.')
      }
    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const data = await prisma.proficiencia.create({
      data: {
        nome,
        fichaId
      },
    });

    return data;
  }
}

module.exports = CreateProficienciaUseCase;
