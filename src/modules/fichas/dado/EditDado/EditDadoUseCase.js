const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditDadoUseCase {
  async execute({ id, nome, valor, isDano }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.dado.findFirst({
      where: {
        id
      },
    });

    if (!data) {
      throw new AppError("Dado não existente.");
    }

    if (nome == null || nome == undefined || nome == "") {
      throw new AppError("Seu dado deve ter um nome.")
    } else {

      const dadoAlreadyExistsByName = await prisma.dado.findMany({
        where: {
          nome,
          fichaId: data.fichaId
        }
      })

      if (dadoAlreadyExistsByName.length == 1 && data.nome != nome) {
        throw new AppError("Você já tem um dado com este nome.")
      }

      data.nome = nome
    }

    if (valor == null || valor == undefined || valor == "") {
      throw new AppError("Seu dado deve ter um valor.")
    } else {
      data.valor = valor
    }

    if (isDano == null || isDano == undefined) {
      data.isDano = data.isDano
    } else {
      data.isDano = isDano
    }

    const patternTeste = /^(((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(20))))([+]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?))*$/g;
    const patternDano = /^(((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;

    if (!isDano && !valor.match(patternTeste)) {
      toast.error('Dado inválido.')
      return
    }

    if (isDano && !valor.match(patternDano)) {
      toast.error('Dado inválido.')
      return
    }

    const dadoAtualizado = await prisma.dado.update({
      where: {
        id: data.id
      },
      data: data
    });

    return dadoAtualizado;
  }
}

module.exports = EditDadoUseCase;
