const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateFichaNPCMonstroUseCase {
  async execute({
    nome,
    nex,

    agi,
    int,
    vig,
    pre,
    forca,

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
    detalhes,
    sessaoId
  }) {

    if (nome == '' || nome == null || nome == undefined
      || nex == '' && nex != 0 || nex == null && nex != 0 || nex == undefined && nex != 0

      || agi == '' || agi == null || agi == undefined
      || int == '' || int == null || int == undefined
      || vig == '' || vig == null || vig == undefined
      || pre == '' || pre == null || pre == undefined
      || forca == '' || forca == null || forca == undefined

      || pvMax == '' || pvMax == null || pvMax == undefined) {
      throw new AppError("Dados necessários não preenchidos.")
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

    const deslocamento = 5 + agi

    const ficha = await prisma.fichaNPCMonstro.create({
      data: {

        nome,
        deslocamento,
        nex,

        agi,
        int,
        vig,
        pre,
        for: forca,

        pv: pvMax,
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
        detalhes,

        sessaoId
      },
    });

    return ficha;
  }
}

module.exports = CreateFichaNPCMonstroUseCase;
