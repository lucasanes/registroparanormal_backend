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

    const patternTeste = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(20))))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?))*$/g;
    const patternDano = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;

    if (!isDano && !valor.match(patternTeste)) {
      toast.error('Dado inválido.')
      return
    }

    if (isDano && !valor.match(patternDano)) {
      toast.error('Dado inválido.')
      return
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
