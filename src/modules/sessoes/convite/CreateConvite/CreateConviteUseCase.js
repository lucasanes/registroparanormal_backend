const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateConviteUseCase {
  async execute({ userEmail, sessaoId }) {

    const userEmailAlreadyExists = await prisma.user.findFirst({
      where: {
        email: userEmail
      }
    })

    if (!userEmailAlreadyExists) {
      throw new AppError("Não existe nenhum usuário com este email.");
    }

    const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
      where: {
        id: sessaoId,
      },
    });

    if (!sessaoIdAlreadyExists) {
      throw new AppError("Não existe nenhuma sessão com o ID passado.");
    }

    const alreadyExistsByEmail = await prisma.convite.findFirst({
      where: {
        userEmail,
        sessaoId
      }
    })

    if (alreadyExistsByEmail) {
      throw new AppError("Você já convidou este usuário.")
    }

    const data = await prisma.convite.create({
      data: {
        userEmail,
        sessaoId
      },
    });

    return data;
  }
}

module.exports = CreateConviteUseCase;
