const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateRitualUseCase {
  async execute({ nome, circulo, alcance, elemento, execucao, duracao, alvo, resistencia, normal, discente, verdadeiro, descricao, imagem, fichaId }) {

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

      if (nome.length > 30) {
        throw new AppError("O nome de seu ritual não pode passar de 30 caracteres.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (normal != undefined && normal != '') {

      const valorDadoNormalRegex = /^\d{1,2}d\d{1,2}$/

      if (normal.includes("+")) {
        const dadosNormal = normal.split("+")
        dadosNormal.forEach(dado => {
          if (dado.includes("d")) {
            if (!valorDadoNormalRegex.test(dado)) {
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

        if (!valorDadoNormalRegex.test(normal)) {
          throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
        }
        const dadoSeparado = normal.split("d")
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

    if (discente != undefined && discente != '') {

      const valorDadoDiscenteRegex = /^\d{1,2}d\d{1,2}$/

      if (discente.includes("+")) {
        const dadosDiscente = discente.split("+")
        dadosDiscente.forEach(dado => {
          if (dado.includes("d")) {
            if (!valorDadoDiscenteRegex.test(dado)) {
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

        if (!valorDadoDiscenteRegex.test(discente)) {
          throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
        }
        const dadoSeparado = discente.split("d")
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

    if (verdadeiro != undefined && verdadeiro != '') {

      const valorDadoVerdadeiroRegex = /^\d{1,2}d\d{1,2}$/

      if (verdadeiro.includes("+")) {
        const dadosVerdadeiro = verdadeiro.split("+")
        dadosVerdadeiro.forEach(dado => {
          if (dado.includes("d")) {
            if (!valorDadoVerdadeiroRegex.test(dado)) {
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

        if (!valorDadoVerdadeiroRegex.test(verdadeiro)) {
          throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
        }
        const dadoSeparado = verdadeiro.split("d")
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

    if (alcance == undefined || alcance == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (elemento == undefined || elemento == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (execucao == undefined || execucao == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (duracao == undefined || duracao == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (alvo == undefined || alvo == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (circulo != undefined && circulo != '') {
      if (circulo > 4) {
        throw new AppError("Só existem rituais até o 4º círculo.")
      }
    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (resistencia == undefined || resistencia == '') {

      resistencia = null

    }

    if (descricao == undefined || descricao == '') {

      descricao = null

    }

    if (imagem == undefined || imagem == '') {

      imagem = null

    }

    const data = await prisma.ritual.create({
      data: {
        nome,
        circulo,
        alcance,
        elemento,
        execucao,
        duracao,
        alvo,
        resistencia,
        normal,
        discente,
        verdadeiro,
        descricao,
        imagem,
        fichaId
      },
    });

    return data;
  }
}

module.exports = CreateRitualUseCase;
