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
          userId,
          sessaoId
        },
      });

      await prisma.participante.create({
        data: {
          sessaoId,
          userId,
          fichaId: ficha.id
        }
      })

    } else {
      throw new AppError("Esta sessão não existe.")
    }

    const deslocamento = 7 + agi

    let peprod

    if (Math.floor(nex / 5) < 1) {
      peprod = 1
    } else {
      peprod = Math.floor(nex / 5)
    }

    let peso;

    if (forca == 0) {
      peso = 2
    } else {
      peso = forca * 5
    }



    const principal = await prisma.principal.create({
      data: {
        fichaId: ficha.id,
        nome,
        jogador,
        classe,
        origem,
        nacionalidade,
        idade,
        nex,
        trilha,
        patente,
        peprod,
        deslocamento
      }
    })

    const atributos = await prisma.atributo.create({
      data: {
        fichaId: ficha.id,
        agi: agi,
        int: int,
        vig: vig,
        pre: pre,
        for: forca
      }
    })

    const status = await prisma.status.create({
      data: {
        fichaId: ficha.id,
        combate: false,
        insano: false,
        danoMassivo: false,
        inconsciente: false,
        pv: pvMax,
        pvMax: pvMax,
        ps: sanMax,
        psMax: sanMax,
        pe: peMax,
        peMax: peMax,
        peso: peso
      }
    })

    const pericias = await prisma.pericias.create({
      data: {
        fichaId: ficha.id
      }
    })

    let defesas

    const passiva = 10 + Number(agi)

    defesas = await prisma.defesas.create({
      data: {
        fichaId: ficha.id,
        passiva: passiva
      }
    })

    await prisma.personagem.create({
      data: {
        fichaId: ficha.id
      }
    })

    await prisma.portrait.create({
      data: {
        fichaId: ficha.id
      }
    })

    await prisma.proficiencia.create({
      data: {
        fichaId: ficha.id,
        nome: 'Armas Simples'
      }
    })



    return { ficha, principal, atributos, status, pericias, defesas };
  }
}

module.exports = CreateFichaUseCase;
