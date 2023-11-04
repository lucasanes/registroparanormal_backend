const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditArmaUseCase {
  async execute({ id, nome, tipo, ataque, dano, margemCritico, danoCritico, recarga, municao, alcance, especial, espaco, categoria, descricao, imagem, sessaoId }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.arma.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new AppError("Iniciativa não existente.");
    }

    const nomeLower = nome.toLowerCase()

    if (nome != undefined && nome != '') {

      if (nome.length > 20) {
        throw new AppError("O nome da sua arma não pode passar de 20 caracteres.")
      }

      const alreadyExistsByArmaName = await prisma.arma.findFirst({
        where: {
          nome: nomeLower,
          sessaoId
        }
      })

      const alreadyExistsByItemName = await prisma.item.findFirst({
        where: {
          nome: nomeLower,
          sessaoId
        }
      })

      if (data.nome != nomeLower) {

        if (alreadyExistsByArmaName) {
          throw new AppError("Você já tem uma arma com este nome.")
        }

        if (alreadyExistsByItemName) {
          throw new AppError("Você já tem um item com este nome.")
        }

      }

      data.nome = nomeLower

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (dano != undefined && dano != '') {

      data.dano = dano

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (margemCritico != undefined && margemCritico != '') {
      if (Number(margemCritico) < 5 || Number(margemCritico) > 20) {
        throw new AppError("A margem do crítico deve ser de 5 a 20.")
      }
      data.margemCritico = Number(margemCritico)
    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (danoCritico != undefined && danoCritico != '') {

      data.danoCritico = danoCritico

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (ataque != undefined && ataque != '') {

      data.ataque = ataque

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (tipo == undefined || tipo == '') {
      throw new AppError("Dados necessários não preenchidos.")
    } else {
      if (tipo.includes(" ")) {
        throw new AppError("O tipo da sua arma não pode conter espaços.")
      }

      data.tipo = tipo
    }

    if (alcance == undefined || alcance == '') {
      throw new AppError("Dados necessários não preenchidos.")
    } else {
      if (alcance.includes(" ")) {
        throw new AppError("O alcance da sua arma não pode conter espaços.")
      }

      data.alcance = alcance
    }

    if (espaco != undefined && espaco != '') {

      if (Number(espaco) > 9) {
        throw new AppError("O máximo de espaços que uma arma pode ter é 9.")
      }

      data.espaco = Number(espaco)

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (categoria != undefined && categoria != '') {

      if (Number(categoria) < 0 || Number(categoria) > 4) {
        throw new AppError("A categoria de uma arma tem que ser entre 0 e 5.")
      }

      data.categoria = Number(categoria)

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (recarga != null && recarga != '') {
      data.recarga = Number(recarga)
    } else {
      data.recarga = null
    }

    if (especial != null && especial != '') {
      const especialLower = especial.toLowerCase()
      data.especial = especialLower
    } else {
      data.especial = null
    }

    if (descricao != null && descricao != '') {
      data.descricao = descricao
    } else {
      data.descricao = null
    }

    if (imagem != null && imagem != '') {
      data.imagem = imagem
    } else {
      data.imagem = null
    }

    if (municao != null && municao != '') {
      data.municao = Number(municao)
    } else {
      data.municao = null
    }

    const armaAtualizada = await prisma.arma.update({
      where: {
        id,
      },
      data: data,
    });

    return armaAtualizada;
  }
}

module.exports = EditArmaUseCase;
