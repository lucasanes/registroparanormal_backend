const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditIniciativaUseCase {
  async execute({ id, posicao, nome, iniciativa, dano }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.iniciativa.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new AppError("Iniciativa não existente.");
    }

    if (posicao == null || posicao == undefined || posicao == "") {
      data.posicao = data.posicao;
    } else {
      data.posicao = posicao;
    }

    if (nome == null || nome == undefined || nome == "") {
      data.nome = data.nome;
    } else {
      data.nome = nome;
    }

    if (iniciativa == null || iniciativa == undefined || iniciativa == "") {
      data.iniciativa = data.iniciativa;
    } else {
      data.iniciativa = iniciativa;
    }

    if (dano == null || dano == undefined || dano == "") {
      data.dano = data.dano;
    } else {
      data.dano = dano;
    }

    const iniciativaAtualizada = await prisma.iniciativa.update({
      where: {
        id,
      },
      data: data,
    });

    return iniciativaAtualizada;
  }
}

module.exports = EditIniciativaUseCase;
