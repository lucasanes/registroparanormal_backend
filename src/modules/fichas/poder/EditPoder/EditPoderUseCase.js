const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditPoderUseCase {
  async execute({ id, nome, descricao }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.poder.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new AppError("Poder não existente.");
    }

    if (nome != undefined && nome != '') {
      if (nome.length < 3) {
        throw new AppError('O nome de seu poder deve ter no mínimo 3 caracteres.')
      }

      data.nome = nome

    }

    if (descricao != undefined && descricao != '') {
      if (descricao.length < 10) {
        throw new AppError('A descrição de seu poder deve ter no mínimo 10 caracteres.')
      }

      data.descricao = descricao

    }

    const poderAtualizado = await prisma.poder.update({
      where: {
        id,
      },
      data: data,
    });

    return poderAtualizado;
  }
}

module.exports = EditPoderUseCase;
