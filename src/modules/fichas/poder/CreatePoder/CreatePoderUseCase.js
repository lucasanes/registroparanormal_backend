const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreatePoderUseCase {
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

    if (nome != undefined && nome != '') {
      if (nome.length < 3) {
        throw new AppError('O nome de seu poder deve ter no mínimo 3 caracteres.')
      }
    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (descricao != undefined && descricao != '') {
      if (descricao.length < 10) {
        throw new AppError('A descrição de seu poder deve ter no mínimo 10 caracteres.')
      }
    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const data = await prisma.poder.create({
      data: {
        nome,
        descricao,
        fichaId
      },
    });

    return data;
  }
}

module.exports = CreatePoderUseCase;
