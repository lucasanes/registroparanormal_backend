const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditArmaUseCase {
  async execute({ id, nome, tipo, dano, margemCritico, danoCritico, recarga, municao, alcance, especial, espaco, categoria, descricao, imagem, sessaoId }) {

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

      const valorDadoDanoRegex = /^\d{1,2}d\d{1,2}$/

      if (dano.includes("+")) {
        const dadosDano = dano.split("+")
        dadosDano.forEach(dado => {
          if (dado.includes("d")) {
            if (!valorDadoDanoRegex.test(dado)) {
              throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
            }
            const dadoSeparado = dado.split("d")
            if (dadoSeparado[0] < 0 || dadoSeparado[0] > 10) {
              throw new AppError("A quantidade de um dado deve ser entre 1 e 10.")
            }
            if (dadoSeparado[1] < 2 || dadoSeparado[1] > 20) {
              throw new AppError("O valor de um dado deve ser entre 2 a 20.")
            }
          } else {
            if (dado == null || dado == undefined || dado == '') {
              throw new AppError("Você precisa colocar algum número depois do '+'.")
            }
            if (dado < 1 || dado > 25) {
              throw new AppError("O valor de soma deve ser entre 1 e 25.")
            }
          }
        });
      } else {

        if (!valorDadoDanoRegex.test(dano)) {
          throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
        }
        const dadoSeparado = dano.split("d")
        if (dadoSeparado[0] < 0 || dadoSeparado[0] > 10) {
          throw new AppError("A quantidade de um dado deve ser entre 1 e 10.")
        }
        if (dadoSeparado[1] < 2 || dadoSeparado[1] > 20) {
          throw new AppError("O valor de um dado deve ser entre 2 a 20.")
        }

      }

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

      const valorDadoDanoRegex = /^\d{1,2}d\d{1,2}$/

      if (danoCritico.includes("+")) {
        const dadosDano = danoCritico.split("+")
        dadosDano.forEach(dado => {
          if (dado.includes("d")) {
            if (!valorDadoDanoRegex.test(dado)) {
              throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
            }
            const dadoSeparado = dado.split("d")
            if (dadoSeparado[0] < 0 || dadoSeparado[0] > 10) {
              throw new AppError("A quantidade de um dado deve ser entre 1 e 10.")
            }
            if (dadoSeparado[1] < 2 || dadoSeparado[1] > 20) {
              throw new AppError("O valor de um dado deve ser entre 2 a 20.")
            }
          } else {
            if (dado == null || dado == undefined || dado == '') {
              throw new AppError("Você precisa colocar algum número depois do '+'.")
            }
            if (dado < 1 || dado > 25) {
              throw new AppError("O valor de soma deve ser entre 1 e 25.")
            }
          }
        });
      } else {

        if (!valorDadoDanoRegex.test(danoCritico)) {
          throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
        }
        const dadoSeparado = danoCritico.split("d")
        if (dadoSeparado[0] < 0 || dadoSeparado[0] > 10) {
          throw new AppError("A quantidade de um dado deve ser entre 1 e 10.")
        }
        if (dadoSeparado[1] < 2 || dadoSeparado[1] > 20) {
          throw new AppError("O valor de um dado deve ser entre 2 a 20.")
        }

      }

      data.danoCritico = danoCritico

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
