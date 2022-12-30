const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditHabilidadeUseCase {
  async execute({ id, nome, descricao }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.habilidade.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new AppError("Habilidade não existente.");
    }

    if (nome != undefined && nome != '') {
      if (nome.length < 3) {
        throw new AppError('O nome de sua habilidade deve ter no mínimo 3 caracteres.')
      }

      data.nome = nome

    }

    if (descricao != undefined && descricao != '') {
      if (descricao.length < 10) {
        throw new AppError('A descrição de sua habilidade deve ter no mínimo 10 caracteres.')
      }

      data.descricao = descricao

    }

    const habilidadeAtualizado = await prisma.habilidade.update({
      where: {
        id,
      },
      data: data,
    });

    return habilidadeAtualizado;
  }
}

module.exports = EditHabilidadeUseCase;
