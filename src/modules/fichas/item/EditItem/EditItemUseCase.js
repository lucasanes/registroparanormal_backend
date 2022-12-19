const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditItemUseCase {
  async execute({ id, nome, espaco, categoria, descricao, isMunicao, imagem }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const itemData = await prisma.item.findFirst({
      where: {
        id,
      },
    });

    if (!itemData) {
      throw new AppError("Item não existente.");
    }

    const nomeLower = nome.toLowerCase()

    if (nome != undefined && nome != '') {

      if (nome.length > 20) {
        throw new AppError("O nome do seu item não pode passar de 20 caracteres.")
      }

      const alreadyExistsByItemName = await prisma.item.findFirst({
        where: {
          nome: nomeLower,
          fichaId: itemData.fichaId
        }
      })

      const alreadyExistsByArmaName = await prisma.arma.findFirst({
        where: {
          nome: nomeLower,
          fichaId: itemData.fichaId
        }
      })

      if (itemData.nome != nomeLower) {

        if (alreadyExistsByItemName) {
          throw new AppError("Você já tem um item com este nome.")
        }

        if (alreadyExistsByArmaName) {
          throw new AppError("Você já tem uma arma com este nome.")
        }

      }

      itemData.nome = nome

    } else {
      throw new AppError('Dados necessários não preenchidos.')
    }

    if (espaco != undefined && espaco != '') {

      if (Number(espaco) > 9) {
        throw new AppError("O máximo de espaços que um item pode ter é 9.")
      }

      itemData.espaco = Number(espaco)

    } else {
      throw new AppError('Dados necessários não preenchidos.')
    }

    if (categoria != undefined && categoria != '') {

      if (Number(categoria) < 0 || Number(categoria) > 4) {
        throw new AppError("A categoria de um item tem que ser entre 0 e 4.")
      }

      itemData.categoria = Number(categoria)

    } else {
      if (categoria != 0) {
        throw new AppError('Dados necessários não preenchidos.')
      }
    }

    if (imagem != undefined && imagem != '') {
      itemData.imagem = imagem
    } else {
      itemData.imagem = null
    }

    if (descricao != undefined && descricao != '') {
      itemData.descricao = descricao
    } else {
      itemData.descricao = null
    }

    if (isMunicao != undefined && isMunicao != '') {
      itemData.isMunicao = isMunicao
    } else {
      itemData.isMunicao = null
    }

    const itemAtualizado = await prisma.item.update({
      where: {
        id,
      },
      data: itemData,
    });

    return itemAtualizado;
  }
}

module.exports = EditItemUseCase;
