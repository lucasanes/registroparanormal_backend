const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditDadoUseCase {
  async execute({ id, nome, classe, origem, nacionalidade, idade, idadeAdicional, nex, trilha, patente, peprod }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.principal.findFirst({
      where: {
        id
      }
    })

    if (nome != null && nome != '') {
      data.nome = nome
    }

    if (origem != null && origem != '') {
      data.origem = origem
    }

    if (classe != null && classe != '') {
      data.classe = classe
    }

    if (classe != null && classe != '') {
      data.classe = classe
    }

    if (nacionalidade != null && nacionalidade != '') {
      data.nacionalidade = nacionalidade
    }

    if (idade != null && idade != '') {
      data.idade = idade
    }

    if (idadeAdicional != null && idadeAdicional != '') {
      data.idadeAdicional = idadeAdicional
    }

    if (nex != null && nex != '') {
      data.nex = nex
    }

    if (trilha != null && trilha != '') {
      data.trilha = trilha
    }

    if (patente != null && patente != '') {
      data.patente = patente
    }

    if (peprod != null && peprod != '') {
      data.peprod = peprod
    }

    const principalAtt = await prisma.principal.update({
      where: {
        id: data.id
      },
      data: data
    });

    return principalAtt;
  }
}

module.exports = EditDadoUseCase;
