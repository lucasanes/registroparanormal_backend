const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class EditFichaNPCMonstroUseCase {
  async execute({
    id,
    nome,
    deslocamento,
    nex,

    agi,
    int,
    vig,
    pre,
    forca,

    pv,
    pvMax,

    acrobacia,
    adestramento,
    arte,
    atletismo,
    atualidade,
    ciencia,
    crime,
    diplomacia,
    enganacao,
    fortitude,
    furtividade,
    iniciativa,
    intimidacao,
    intuicao,
    investigacao,
    luta,
    medicina,
    ocultismo,
    percepcao,
    pilotagem,
    pontaria,
    profissao,
    reflexo,
    religiao,
    sobrevivencia,
    tatica,
    tecnologia,
    vontade,
    passiva,
    esquiva,
    bloqueio,
    mental,
    morte,
    conhecimento,
    sangue,
    energia,
    fisica,
    balistica,
    corte,
    impacto,
    perfuracao,
    eletricidade,
    fogo,
    frio,
    quimica,
    inventario,
    habilidades,
    detalhes
  }) {

    if (!id) {
      throw new AppError("ID não passado.")
    }

    const data = await prisma.fichaNPCMonstro.findFirst({
      where: {
        id
      }
    })

    if (!data) {
      throw new AppError("Não existe nenhum Monstro com o ID passado.")
    }

    if (sessaoId != undefined && sessaoId != '' && sessaoId != null) {
      const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
        where: {
          id: sessaoId,
        },
      });

      if (!sessaoIdAlreadyExists) {
        throw new AppError("Este ID de sessão não existe.");
      }

    } else {
      throw new AppError("Esta sessão não existe.")
    }

    const ficha = await prisma.fichaNPCMonstro.update({
      where: {
        id: data.id
      },

      data: {

        nome,
        deslocamento,
        nex,

        agi,
        int,
        vig,
        pre,
        for: forca,

        pv,
        pvMax,

        acrobacia,
        adestramento,
        arte,
        atletismo,
        atualidade,
        ciencia,
        crime,
        diplomacia,
        enganacao,
        fortitude,
        furtividade,
        iniciativa,
        intimidacao,
        intuicao,
        investigacao,
        luta,
        medicina,
        ocultismo,
        percepcao,
        pilotagem,
        pontaria,
        profissao,
        reflexo,
        religiao,
        sobrevivencia,
        tatica,
        tecnologia,
        vontade,

        passiva,
        esquiva,
        bloqueio,
        mental,
        morte,
        conhecimento,
        sangue,
        energia,
        fisica,
        balistica,
        corte,
        impacto,
        perfuracao,
        eletricidade,
        fogo,
        frio,
        quimica,

        inventario,
        habilidades,
        detalhes
      },
    });

    return ficha;
  }
}

module.exports = EditFichaNPCMonstroUseCase;
