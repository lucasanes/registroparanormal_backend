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
    ataques,
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

    if (nome == '' || nome == null || nome == undefined
      || deslocamento == '' || deslocamento == null || deslocamento == undefined
      || nex == '' && nex != 0 || nex == null && nex != 0 || nex == undefined && nex != 0

      || agi == null && agi != 0 || agi == undefined
      || int == null && int != 0 || int == undefined
      || vig == null && vig != 0 || vig == undefined
      || pre == null && pre != 0 || pre == undefined
      || forca == null && forca != 0 || forca == undefined

      || pvMax == '' || pvMax == null || pvMax == undefined) {
      throw new AppError("Dados necessários não preenchidos.")
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

        ataques,
        habilidades,
        detalhes
      },
    });

    return ficha;
  }
}

module.exports = EditFichaNPCMonstroUseCase;
