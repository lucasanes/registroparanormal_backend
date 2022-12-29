const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditDefesasUseCase {
  async execute({ id, passiva, bloqueio, esquiva, fisica, balistica, corte, impacto, perfuracao, eletricidade, fogo, frio, quimica, mental, morte, conhecimento, sangue, energia }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.defesas.findFirst({
      where: {
        id
      }
    })

    if (passiva != null) {
      data.passiva = passiva
    }

    if (bloqueio != null) {
      data.bloqueio = bloqueio
    }

    if (esquiva != null) {
      data.esquiva = esquiva
    }

    if (fisica != null) {
      data.fisica = fisica
    }

    if (balistica != null) {
      data.balistica = balistica
    }

    if (corte != null) {
      data.corte = corte
    }

    if (impacto != null) {
      data.impacto = impacto
    }

    if (perfuracao != null) {
      data.perfuracao = perfuracao
    }

    if (eletricidade != null) {
      data.eletricidade = eletricidade
    }

    if (fogo != null) {
      data.fogo = fogo
    }

    if (frio != null) {
      data.frio = frio
    }

    if (quimica != null) {
      data.quimica = quimica
    }

    if (mental != null) {
      data.mental = mental
    }

    if (morte != null) {
      data.morte = morte
    }

    if (conhecimento != null) {
      data.conhecimento = conhecimento
    }

    if (sangue != null) {
      data.sangue = sangue
    }

    if (energia != null) {
      data.energia = energia
    }

    const DefesasAtt = await prisma.defesas.update({
      where: {
        id
      },
      data: data
    });

    return DefesasAtt;
  }
}

module.exports = EditDefesasUseCase;
