const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateFichaUseCase {
  async execute({ userId, sessaoId }) {

    if (userId == undefined || userId == '' || userId == null) {
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

    let ficha
    
    if (sessaoId != undefined && sessaoId != '' && sessaoId != null) {
      const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
        where: {
          id: sessaoId,
        },
      });

      if (!sessaoIdAlreadyExists) {
        throw new AppError("Este ID de sessão não existe.");
      }

      if (sessaoIdAlreadyExists.userId == userId) {
        throw new AppError("O dono da sessão não pode ter uma ficha nela.")
      }

      ficha = await prisma.ficha.create({
        data: {
          userId,
          sessaoId
        },
      });

      const participanteAlreadyExistsByUserId = await prisma.participante.findFirst({
        where: {
          userId
        }
      })

      if (participanteAlreadyExistsByUserId) {
        throw new AppError("Este usuário já tem uma ficha em sua sessão.")
      }

      await prisma.participante.create({
        data: {
          sessaoId,
          userId,
          fichaId: ficha.id,
          username: userIdAlreadyExists.username
        }
      })

    } else {

      const fichasSeparadas = await prisma.ficha.findMany({
        where: {
          userId
        }
      })

      if (fichasSeparadas.length == 3) {
        throw new AppError("Você só pode ter no máximo 3 fichas.")
      }

      ficha = await prisma.ficha.create({
        data: {
          userId
        },
      });
    }
    
    return ficha;
  }
}

module.exports = CreateFichaUseCase;
