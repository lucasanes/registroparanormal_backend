const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditPericiasUseCase {
  async execute({ id, acrobacia, adestramento, arte, atletismo, atualidade, ciencia, crime, diplomacia, enganacao, fortitude, furtividade, iniciativa, intimidacao, intuicao, investigacao, luta, medicina, ocultismo, percepcao, pilotagem, pontaria, profissao, reflexo, religiao, sobrevivencia, tatica, tecnologia, vontade }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.pericias.findFirst({
      where: {
        id
      }
    })

    if (acrobacia != null) {
      data.acrobacia = acrobacia
    } else {
      if (acrobacia == 0) {
        data.acrobacia = 0
      }
    }

    if (adestramento != null) {
      data.adestramento = adestramento
    } else {
      if (adestramento == 0) {
        data.adestramento = 0
      }
    }

    if (arte != null) {
      data.arte = arte
    } else {
      if (arte == 0) {
        data.arte = 0
      }
    }

    if (atletismo != null) {
      data.atletismo = atletismo
    } else {
      if (atletismo == 0) {
        data.atletismo = 0
      }
    }

    if (atualidade != null) {
      data.atualidade = atualidade
    } else {
      if (atualidade == 0) {
        data.atualidade = 0
      }
    }

    if (ciencia != null) {
      data.ciencia = ciencia
    } else {
      if (ciencia == 0) {
        data.ciencia = 0
      }
    }

    if (crime != null) {
      data.crime = crime
    } else {
      if (crime == 0) {
        data.crime = 0
      }
    }

    if (diplomacia != null) {
      data.diplomacia = diplomacia
    } else {
      if (diplomacia == 0) {
        data.diplomacia = 0
      }
    }

    if (enganacao != null) {
      data.enganacao = enganacao
    } else {
      if (enganacao == 0) {
        data.enganacao = 0
      }
    }

    if (fortitude != null) {
      data.fortitude = fortitude
    } else {
      if (fortitude == 0) {
        data.fortitude = 0
      }
    }

    if (furtividade != null) {
      data.furtividade = furtividade
    } else {
      if (furtividade == 0) {
        data.furtividade = 0
      }
    }

    if (iniciativa != null) {
      data.iniciativa = iniciativa
    } else {
      if (iniciativa == 0) {
        data.iniciativa = 0
      }
    }

    if (intimidacao != null) {
      data.intimidacao = intimidacao
    } else {
      if (intimidacao == 0) {
        data.intimidacao = 0
      }
    }

    if (intuicao != null) {
      data.intuicao = intuicao
    } else {
      if (intuicao == 0) {
        data.intuicao = 0
      }
    }

    if (investigacao != null) {
      data.investigacao = investigacao
    } else {
      if (investigacao == 0) {
        data.investigacao = 0
      }
    }

    if (luta != null) {
      data.luta = luta
    } else {
      if (luta == 0) {
        data.luta = 0
      }
    }

    if (medicina != null) {
      data.medicina = medicina
    } else {
      if (medicina == 0) {
        data.medicina = 0
      }
    }

    if (ocultismo != null) {
      data.ocultismo = ocultismo
    } else {
      if (ocultismo == 0) {
        data.ocultismo = 0
      }
    }

    if (percepcao != null) {
      data.percepcao = percepcao
    } else {
      if (percepcao == 0) {
        data.percepcao = 0
      }
    }

    if (pilotagem != null) {
      data.pilotagem = pilotagem
    } else {
      if (pilotagem == 0) {
        data.pilotagem = 0
      }
    }

    if (pontaria != null) {
      data.pontaria = pontaria
    } else {
      if (pontaria == 0) {
        data.pontaria = 0
      }
    }

    if (profissao != null) {
      data.profissao = profissao
    } else {
      if (profissao == 0) {
        data.profissao = 0
      }
    }

    if (reflexo != null) {
      data.reflexo = reflexo
    } else {
      if (reflexo == 0) {
        data.reflexo = 0
      }
    }

    if (religiao != null) {
      data.religiao = religiao
    } else {
      if (religiao == 0) {
        data.religiao = 0
      }
    }

    if (sobrevivencia != null) {
      data.sobrevivencia = sobrevivencia
    } else {
      if (sobrevivencia == 0) {
        data.sobrevivencia = 0
      }
    }

    if (tatica != null) {
      data.tatica = tatica
    } else {
      if (tatica == 0) {
        data.tatica = 0
      }
    }

    if (tecnologia != null) {
      data.tecnologia = tecnologia
    } else {
      if (tecnologia == 0) {
        data.tecnologia = 0
      }
    }

    if (vontade != null) {
      data.vontade = vontade
    } else {
      if (vontade == 0) {
        data.vontade = 0
      }
    }

    const PericiasAtt = await prisma.pericias.update({
      where: {
        id
      },
      data: data
    });

    return PericiasAtt;
  }
}

module.exports = EditPericiasUseCase;
