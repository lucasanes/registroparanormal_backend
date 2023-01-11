const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateFichaNPCUseCase {
  async execute({
    nome,
    classe,
    origem,
    nacionalidade,
    idade,
    nex,
    trilha,
    patente,

    agi,
    int,
    vig,
    pre,
    forca,

    pvMax,
    psMax,
    peMax,

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
    ataques,
    detalhes,
    sessaoId
  }) {

    if (nome == '' || nome == null || nome == undefined
      || origem == '' || origem == null || origem == undefined
      || nacionalidade == '' || nacionalidade == null || nacionalidade == undefined
      || nex == '' && nex != 0 || nex == null && nex != 0 || nex == undefined && nex != 0
      || idade == '' || idade == null || idade == undefined

      || agi == null && agi != 0 || agi == undefined
      || int == null && int != 0 || int == undefined
      || vig == null && vig != 0 || vig == undefined
      || pre == null && pre != 0 || pre == undefined
      || forca == null && forca != 0 || forca == undefined

      || pvMax == '' || pvMax == null || pvMax == undefined
      || psMax == '' || psMax == null || psMax == undefined
      || peMax == '' || peMax == null || peMax == undefined) {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (trilha == null || trilha == '' || trilha == undefined) {
      trilha = 'Nenhuma'
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

    const deslocamento = 7 + agi

    let peso;

    if (forca == 0) {
      peso = 2
    } else {
      peso = forca * 5
    }

    const ficha = await prisma.fichaNPC.create({
      data: {

        nome,
        classe,
        origem,
        nacionalidade,
        idade,
        deslocamento,
        nex,
        trilha,
        patente,
        peso,

        agi,
        int,
        vig,
        pre,
        for: forca,

        pv: pvMax,
        ps: psMax,
        pe: peMax,
        pvMax,
        psMax,
        peMax,

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
        ataques,
        habilidades,
        detalhes,

        sessaoId
      },
    });

    return ficha;
  }
}

module.exports = CreateFichaNPCUseCase;
