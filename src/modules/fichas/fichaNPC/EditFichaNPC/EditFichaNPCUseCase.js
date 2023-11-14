const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class EditFichaNPCUseCase {
  async execute({
    id,
    nome,
    classe,
    origem,
    nacionalidade,
    idade,
    nex,
    trilha,
    patente,
    deslocamento,
    peso,

    agi,
    int,
    vig,
    pre,
    forca,

    pv,
    ps,
    pe,
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
    sorte,
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
    detalhes

  }) {

    if (!id) {
      throw new AppError('ID não passado.')
    }

    const data = await prisma.fichaNPC.findFirst({
      where: {
        id
      }
    })

    if (!data) {
      throw new AppError("Não existe nenhum NPC com o ID passado.")
    }

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


    const ficha = await prisma.fichaNPC.update({
      where: {
        id: data.id
      },
      data: {
        nome,
        classe,
        origem,
        nacionalidade,
        deslocamento,
        peso,
        idade,
        nex,
        trilha,
        patente,

        agi,
        int,
        vig,
        pre,
        for: forca,

        pv,
        pe,
        ps,
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
        sorte,
        
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
        detalhes
      },
    });

    return ficha;
  }
}

module.exports = EditFichaNPCUseCase;
