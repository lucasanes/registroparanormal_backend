const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateFichaUseCase {
  async execute({
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
    detalhes,
    sessaoId
  }) {

    if (nome == '' || nome == null || nome == undefined
      || origem == '' || origem == null || origem == undefined
      || nacionalidade == '' || nacionalidade == null || nacionalidade == undefined
      || idade == '' || idade == null || idade == undefined
      || nex == '' && nex != 0 || nex == null && nex != 0 || nex == undefined && nex != 0
      || idade == '' || idade == null || idade == undefined
      || agi == '' || agi == null || agi == undefined
      || int == '' || int == null || int == undefined
      || vig == '' || vig == null || vig == undefined
      || pre == '' || pre == null || pre == undefined
      || forca == '' || forca == null || forca == undefined
      || pvMax == '' || pvMax == null || pvMax == undefined
      || sanMax == '' || sanMax == null || sanMax == undefined
      || peMax == '' || peMax == null || peMax == undefined) {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (trilha == null || trilha == '' || trilha == undefined) {
      trilha = 'Nenhuma'
    }

    let ficha

    if (sessaoId != undefined && sessaoId != '' && sessaoId != null) {
      const sessaoIdAlreadyExists = await prisma.sessao.findFirst({
        where: {
          id: sessaoId,
        },
      });

      if (!sessaoIdAlreadyExists) {
        throw new AppError("Este ID de sessão não existe.");
      }

      ficha = await prisma.fichaNPC.create({
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
          detalhes,
          sessaoId
        },
      });

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

    return ficha;
  }
}

module.exports = CreateFichaUseCase;
