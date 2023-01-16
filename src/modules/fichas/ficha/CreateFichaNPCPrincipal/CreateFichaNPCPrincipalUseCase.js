const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");
const { hash } = require("bcrypt");

class CreateFichaNPCPrincipalUseCase {
  async execute({
    userId, sessaoId,
    nome, jogador, classe, origem, nacionalidade, idade, nex, trilha, patente,
    agi, int, vig, pre, forca,
    pvMax, sanMax, peMax
  }) {

    if (userId == undefined || userId == '' || userId == null) {
      throw new AppError("Dados necessários não preenchidos.")
    }

    const userIdAlreadyExists = await prisma.user.findFirst({
      where: {
        id: userId
      },
    });

    if (!userIdAlreadyExists) {
      throw new AppError("Este ID de usuário não existe.");
    }


    if (nome == '' || nome == null || nome == undefined
      || origem == '' || origem == null || origem == undefined
      || nacionalidade == '' || nacionalidade == null || nacionalidade == undefined
      || idade == '' || idade == null || idade == undefined
      || nex == '' && nex != 0 || nex == null && nex != 0 || nex == undefined && nex != 0
      || idade == '' || idade == null || idade == undefined
      || agi == null && agi != 0 || agi == undefined
      || int == null && int != 0 || int == undefined
      || vig == null && vig != 0 || vig == undefined
      || pre == null && pre != 0 || pre == undefined
      || forca == null && forca != 0 || forca == undefined
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

      ficha = await prisma.ficha.create({
        data: {
          userId,
          sessaoId
        },
      });

    } else {

      const fichasSeparadas = await prisma.ficha.findMany({
        where: {
          userId,
          sessaoId
        }
      })

      if (fichasSeparadas.length == 3) {
        throw new AppError("Você só pode ter no máximo 3 NPC's principais.")
      }

      ficha = await prisma.ficha.create({
        data: {
          userId
        },
      });

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

module.exports = CreateFichaNPCPrincipalUseCase;
