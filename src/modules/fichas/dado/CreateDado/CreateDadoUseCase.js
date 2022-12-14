const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateDadoUseCase {
  async execute({ nome, valor, isDano, fichaId }) {

    let valorDadoRegex;

    const nomeLower = nome.toLowerCase()

    const dados = await prisma.dado.findMany({
      where: {
        fichaId
      }
    })

    if (dados.length == 15) {
      throw new AppError("Você só pode ter no máximo 15 dados customizados.")
    }

    if (nome == undefined || nome == '') {
      throw new AppError("Dados necessários não preenchidos.")
    } else {

      if (nome.length > 10) {
        throw new AppError("O nome do seu dado deve ter no máximo 10 caracteres.")
      }

      const dadoAlreadyExistsByName = await prisma.dado.findFirst({
        where: {
          nome: nomeLower,
          fichaId
        }
      })

      if (dadoAlreadyExistsByName) {
        throw new AppError("Você já tem um dado com este nome.")
      }

    }

    if (valor == undefined || valor == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (isDano == undefined || isDano == null) {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (!isDano) {

      if (valor.includes("+")) {

        if (valor.includes('-')) {
          valorDadoRegex = /^\-[0-5]d20\+[0-9]{1,2}$/

          const valorNegativo = valor.split('d')

          if (valorNegativo[0] != '-1') {
            throw new AppError("O único dado negativo que você pode criar é -1.")
          }
        } else {
          valorDadoRegex = /^[0-5]d20\+[0-9]{1,2}$/
        }

        const valorSomado = valor.split("+")

        if (valorSomado[1] == null || valorSomado[1] == '') {
          throw new AppError("Você precisa colocar algum número depois do '+'.")
        }

        if (valorSomado[1] > 20 || valorSomado[1] < 1) {
          throw new AppError("O valor de soma deve ser entre 1 e 20.")
        }

      } else {

        if (valor.includes('-')) {
          valorDadoRegex = /^\-[0-5]d20$/

          const valorNegativo = valor.split('d')

          if (valorNegativo[0] != '-1') {
            throw new AppError("O único dado negativo que você pode criar é -1.")
          }
        } else {
          valorDadoRegex = /^[0-5]d20$/
        }

      }

      if (!valorDadoRegex.test(valor)) {
        const valorSplit = valor.split('d')
        if (valorSplit[0] > 5) {
          throw new AppError("Você só pode rolar no máximo 5d20.")
        }
        throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo e se o valor do dado é igual a 20.")
      }

    } else {

      const valorDadoDanoRegex = /^\d{1,2}d\d{1,2}$/

      if (valor.includes("+")) {
        const dadosDano = valor.split("+")
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

        if (!valorDadoDanoRegex.test(valor)) {
          throw new AppError("Valor do dado inválido. Verifique se o 'd' está minúsculo.")
        }
        const dadoSeparado = valor.split("d")
        if (dadoSeparado[0] < 0 || dadoSeparado[0] > 10) {
          throw new AppError("A quantidade de um dado deve ser entre 1 e 10.")
        }
        if (dadoSeparado[1] < 2 || dadoSeparado[1] > 20) {
          throw new AppError("O valor de um dado deve ser entre 2 a 20.")
        }

      }

    }

    if (fichaId != undefined && fichaId != '') {
      const fichaIdAlreadyExists = await prisma.ficha.findFirst({
        where: {
          id: fichaId,
        },
      });

      if (!fichaIdAlreadyExists) {
        throw new AppError("Este ID de sessão não existe.");
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const dado = await prisma.dado.create({
      data: {
        nome: nomeLower,
        valor,
        isDano,
        fichaId,
      },
    });

    return dado;
  }
}

module.exports = CreateDadoUseCase;
