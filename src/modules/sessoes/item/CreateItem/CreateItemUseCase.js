const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateItemUseCase {
  async execute({ nome, espaco, categoria, descricao, imagem, isMunicao, municao, municaoMax, sessaoId }) {

    const nomeLower = nome.toLowerCase()

    if (sessaoId != undefined && sessaoId != '') {

      const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
        where: {
          id: sessaoId,
        },
      });

      if (!sessaoIdAlreadyExists) {
        throw new AppError("Não existe nenhuma sessão com o ID passado.");
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (nome != undefined && nome != '') {

      if (nome.length > 20) {
        throw new AppError("O nome do seu item não pode passar de 20 caracteres.")
      }

      const alreadyExistsByItemName = await prisma.item.findFirst({
        where: {
          nome: nomeLower,
          sessaoId
        }
      })

      const alreadyExistsByArmaName = await prisma.arma.findFirst({
        where: {
          nome: nomeLower,
          sessaoId
        }
      })

      if (alreadyExistsByItemName) {
        throw new AppError("Você já tem um item com este nome.")
      }

      if (alreadyExistsByArmaName) {
        throw new AppError("Você já tem uma arma com este nome.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (espaco != undefined && espaco != '') {

      if (espaco > 9) {
        throw new AppError("O máximo de espaços que um item pode ter é 9.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (categoria != undefined && categoria != '') {

      if (categoria < 0 || categoria > 4) {
        throw new AppError("A categoria de um item tem que ser entre 0 e 4.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const data = await prisma.item.create({
      data: {
        nome: nomeLower,
        espaco: Number(espaco),
        categoria: Number(categoria),
        descricao,
        imagem,
        isMunicao,
        municao,
        municaoMax,
        sessaoId
      },
    });

    return data;
  }
}

module.exports = CreateItemUseCase;
