const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateDadoUseCase {
  async execute({ nome, valor, isDano, sessaoId }) {

    let valorDadoRegex;

    const nomeLower = nome.toLowerCase()

    const dados = await prisma.dado.findMany({
      where: {
        sessaoId
      }
    })

    if (dados.length == 15) {
      throw new AppError("Você só pode ter no máximo 15 dados customizados.")
    }

    if (nome == undefined || nome == '') {
      throw new AppError("Dados necessários não preenchidos.")
    } else {

      const dadoAlreadyExistsByName = await prisma.dado.findFirst({
        where: {
          nome: nomeLower,
          sessaoId
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

    const pattern = /^([+-]?((100|\d{1,2}|\/[ADCEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|\/[ADCEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGILMNOPRSTUV]{3,4}\/))?)|([+-]\d{0,3}|1000)?)*$/g;

    if (!valor.match(pattern)) {
      throw new AppError("Dado inválido.")
    }

    if (sessaoId != undefined && sessaoId != '') {
      const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
        where: {
          id: sessaoId,
        },
      });

      if (!sessaoIdAlreadyExists) {
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
        sessaoId,
      },
    });

    return dado;
  }
}

module.exports = CreateDadoUseCase;
