const { hash, compare } = require("bcrypt");
const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditPersonagemUseCase {
  async execute({ id, historia, aparencia, pep, dfm, favoritos, personalidade, piorPesadelo, anotacoesPersonagem, anotacoesPlayer }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.personagem.findFirst({
      where: {
        fichaId: id
      },
    });

    if (!data) {
      throw new AppError("Personagem não existente.");
    }

    if (historia != undefined && historia != '') {
      data.historia = historia
    } else {
      data.historia = null
    }

    if (aparencia != undefined && aparencia != '') {
      data.aparencia = aparencia
    } else {
      data.aparencia = null
    }

    if (pep != undefined && pep != '') {
      data.pep = pep
    } else {
      data.pep = null
    }

    if (dfm != undefined && dfm != '') {
      data.dfm = dfm
    } else {
      data.dfm = null
    }

    if (favoritos != undefined && favoritos != '') {
      data.favoritos = favoritos
    } else {
      data.favoritos = null
    }

    if (personalidade != undefined && personalidade != '') {
      data.personalidade = personalidade
    } else {
      data.personalidade = null
    }

    if (piorPesadelo != undefined && piorPesadelo != '') {
      data.piorPesadelo = piorPesadelo
    } else {
      data.piorPesadelo = null
    }

    if (anotacoesPersonagem != undefined && anotacoesPersonagem != '') {
      data.anotacoesPersonagem = anotacoesPersonagem
    } else {
      data.anotacoesPersonagem = null
    }

    if (anotacoesPlayer != undefined && anotacoesPlayer != '') {
      data.anotacoesPlayer = anotacoesPlayer
    } else {
      data.anotacoesPlayer = null
    }

    const personagemAtualizada = await prisma.personagem.update({
      where: {
        id: data.id
      },
      data: data
    });

    return personagemAtualizada;
  }
}

module.exports = EditPersonagemUseCase;
