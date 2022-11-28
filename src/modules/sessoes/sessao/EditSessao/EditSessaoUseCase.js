const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditSessaoUseCase {
  async execute({ id, nome, descricao, userId }) {
    if (!id) {
      throw new AppError("ID não existente.");
    }

    const sessao = await prisma.sessao.findFirst({
      where: {
        id,
      },
    });

    if (!sessao) {
      throw new AppError("Sessão não existente.");
    }

    if (nome != undefined && nome != "") {
      if (nome.length < 3) {
        throw new AppError(
          "O nome da sua sessão precisa ter no mínimo 3 caracteres."
        );
      }
    } else if (descricao != undefined && descricao != "") {
      if (descricao.length < 16) {
        throw new AppError(
          "A descrição da sua sessão precisa ter no mínimo 16 caracteres."
        );
      }
    }

    if (nome == sessao.nome && descricao == sessao.descricao) {
      throw new AppError(
        "Você precisa mudar seu nome ou sua descrição para um diferente do anterior."
      );
    }

    if (nome == null || nome == undefined || nome == "") {
      sessao.nome = sessao.nome;
    } else {
      sessao.nome = nome;
    }

    if (descricao == null || descricao == undefined || descricao == "") {
      sessao.descricao = sessao.descricao;
    } else {
      sessao.descricao = descricao;
    }

    const sessaoByUserIdAlreadyExists = await prisma.sessao.findFirst({
      where: {
        userId,
      },
    });

    if (sessaoByUserIdAlreadyExists) {
      const nomeAlreadyExists = await prisma.sessao.findFirst({
        where: {
          nome,
        },
      });

      if (nomeAlreadyExists) {
        throw new AppError("Você já tem uma sessão com este nome.");
      }
    }

    const sessaoAtualizado = await prisma.sessao.update({
      where: {
        id,
      },
      data: sessao,
    });

    return sessaoAtualizado;
  }
}

module.exports = EditSessaoUseCase;
