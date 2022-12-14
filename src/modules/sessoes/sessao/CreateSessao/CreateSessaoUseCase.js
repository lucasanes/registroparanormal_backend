const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateSessaoUseCase {
  async execute({ nome, descricao, userId }) {

    if (nome == undefined || nome == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (nome.length < 3) {
      throw new AppError("O nome da sua sessão precisa ter no mínimo 3 caracteres.")
    }

    if (userId == undefined || userId == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const userIdAlreadyExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userIdAlreadyExists) {
      throw new AppError("Este ID de usuário não existe.");
    }

    if (descricao == undefined || descricao == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (descricao.length < 16) {
      throw new AppError("A descrição da sua sessão precisa ter no mínimo 18 caracteres.")
    }

    const sessaoByUserIdAlreadyExists = await prisma.sessao.findMany({
      where: {
        userId
      }
    })

    if (sessaoByUserIdAlreadyExists.length == 3) {
      throw new AppError("Você só pode ter no máximo 3 sessões.")
    }

    if (sessaoByUserIdAlreadyExists) {
      const nomeAlreadyExists = await prisma.sessao.findFirst({
        where: {
          nome
        }
      })

      if (nomeAlreadyExists) {
        throw new AppError("Você já tem uma sessão com este nome.")
      }
    }

    const sessao = await prisma.sessao.create({
      data: {
        nome,
        descricao,
        userId,
      },
    });

    const sessoes = await prisma.sessao.findFirst({
      where: {
        id: sessao.id
      },
      include: {
        Participantes: {
          include: {
            user: {
              select: {
                nome: true
              }
            }
          }
        }
      }
    })

    return sessoes;
  }
}

module.exports = CreateSessaoUseCase;
