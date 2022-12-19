const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EnviarArmaUseCase {
  async execute({ nome, tipo, dano, margemCritico, danoCritico, recarga, alcance, especial, espaco, categoria, descricao, imagem, fichaId }) {

    const nomeLower = nome.toLowerCase()

    if (fichaId != undefined && fichaId != '') {

      const fichaIdAlreadyExists = await prisma.ficha.findFirst({
        where: {
          id: fichaId,
        },
      });

      if (!fichaIdAlreadyExists) {
        throw new AppError("Não existe nenhuma sessão com o ID passado.");
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (nome != undefined && nome != '') {

      if (nome.length > 20) {
        throw new AppError("O nome da sua arma não pode passar de 20 caracteres.")
      }

      const alreadyExistsByName = await prisma.arma.findFirst({
        where: {
          nome: nomeLower,
          fichaId
        }
      })

      const alreadyExistsByItemName = await prisma.item.findFirst({
        where: {
          nome: nomeLower,
          fichaId
        }
      })

      if (alreadyExistsByName) {
        throw new AppError("Esta ficha já tem uma arma com este nome.")
      }

      if (alreadyExistsByItemName) {
        throw new AppError("Esta ficha já tem um item com este nome.")
      }

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

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (margemCritico != undefined && margemCritico != '') {
      if (Number(margemCritico) < 5 || Number(margemCritico) > 20) {
        throw new AppError("A margem do crítico deve ser de 5 a 20.")
      }
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

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (tipo == undefined || tipo == '') {
      throw new AppError("Dados necessários não preenchidos.")
    } else {
      if (tipo.includes(" ")) {
        throw new AppError("O tipo da sua arma não pode conter espaços.")
      }
    }

    if (espaco != undefined && espaco != '') {

      if (Number(espaco) > 9) {
        throw new AppError("O máximo de espaços que uma arma pode ter é 9.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (categoria != undefined && categoria != '') {

      if (Number(categoria) < 0 || Number(categoria) > 4) {
        throw new AppError("A categoria de uma arma tem que ser entre 0 e 5.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    let especialLower = especial;

    if (especial != null) {
      especialLower = especial.toLowerCase()
    }

    const data = await prisma.arma.create({
      data: {
        nome: nomeLower,
        tipo: tipo.toLowerCase(),
        dano,
        margemCritico: Number(margemCritico),
        danoCritico,
        recarga: Number(recarga),
        alcance: alcance.toLowerCase(),
        especial: especialLower,
        espaco: Number(espaco),
        categoria: Number(categoria),
        descricao,
        imagem,
        fichaId
      },
    });

    return data;
  }
}

module.exports = EnviarArmaUseCase;
