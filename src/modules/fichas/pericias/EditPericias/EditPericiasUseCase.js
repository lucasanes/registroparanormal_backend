const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditPericiasUseCase {
  async execute({ id, acrobacia, adestramento, arte, atletismo, atualidade, ciencia, crime, diplomacia, enganacao, fortitude, furtividade, iniciativa, intimidacao, intuicao, investigacao, luta, medicina, ocultismo, percepcao, pilotagem, pontaria, profissao, reflexo, religiao, sobrevivencia, sorte, tatica, tecnologia, vontade }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.pericias.findFirst({
      where: {
        fichaId: id
      }
    })

    if (acrobacia != null) {
      data.acrobacia = acrobacia
    } else {
      if (acrobacia == 0) {
        data.acrobacia = null
      }
    }

    if (adestramento != null) {
      data.adestramento = adestramento
    } else {
      if (adestramento == 0) {
        data.adestramento = null
      }
    }

    if (arte != null) {
      data.arte = arte
    } else {
      if (arte == 0) {
        data.arte = null
      }
    }

    if (atletismo != null) {
      data.atletismo = atletismo
    } else {
      if (atletismo == 0) {
        data.atletismo = null
      }
    }

    if (atualidade != null) {
      data.atualidade = atualidade
    } else {
      if (atualidade == 0) {
        data.atualidade = null
      }
    }

    if (ciencia != null) {
      data.ciencia = ciencia
    } else {
      if (ciencia == 0) {
        data.ciencia = null
      }
    }

    if (crime != null) {
      data.crime = crime
    } else {
      if (crime == 0) {
        data.crime = null
      }
    }

    if (diplomacia != null) {
      data.diplomacia = diplomacia
    } else {
      if (diplomacia == 0) {
        data.diplomacia = null
      }
    }

    if (enganacao != null) {
      data.enganacao = enganacao
    } else {
      if (enganacao == 0) {
        data.enganacao = null
      }
    }

    if (fortitude != null) {
      data.fortitude = fortitude
    } else {
      if (fortitude == 0) {
        data.fortitude = null
      }
    }

    if (furtividade != null) {
      data.furtividade = furtividade
    } else {
      if (furtividade == 0) {
        data.furtividade = null
      }
    }

    if (iniciativa != null) {
      data.iniciativa = iniciativa
    } else {
      if (iniciativa == 0) {
        data.iniciativa = null
      }
    }

    if (intimidacao != null) {
      data.intimidacao = intimidacao
    } else {
      if (intimidacao == 0) {
        data.intimidacao = null
      }
    }

    if (intuicao != null) {
      data.intuicao = intuicao
    } else {
      if (intuicao == 0) {
        data.intuicao = null
      }
    }

    if (investigacao != null) {
      data.investigacao = investigacao
    } else {
      if (investigacao == 0) {
        data.investigacao = null
      }
    }

    if (luta != null) {
      data.luta = luta
    } else {
      if (luta == 0) {
        data.luta = null
      }
    }

    if (medicina != null) {
      data.medicina = medicina
    } else {
      if (medicina == 0) {
        data.medicina = null
      }
    }

    if (ocultismo != null) {
      data.ocultismo = ocultismo
    } else {
      if (ocultismo == 0) {
        data.ocultismo = null
      }
    }

    if (percepcao != null) {
      data.percepcao = percepcao
    } else {
      if (percepcao == 0) {
        data.percepcao = null
      }
    }

    if (pilotagem != null) {
      data.pilotagem = pilotagem
    } else {
      if (pilotagem == 0) {
        data.pilotagem = null
      }
    }

    if (pontaria != null) {
      data.pontaria = pontaria
    } else {
      if (pontaria == 0) {
        data.pontaria = null
      }
    }

    if (profissao != null) {
      data.profissao = profissao
    } else {
      if (profissao == 0) {
        data.profissao = null
      }
    }

    if (reflexo != null) {
      data.reflexo = reflexo
    } else {
      if (reflexo == 0) {
        data.reflexo = null
      }
    }

    if (religiao != null) {
      data.religiao = religiao
    } else {
      if (religiao == 0) {
        data.religiao = null
      }
    }

    if (sobrevivencia != null) {
      data.sobrevivencia = sobrevivencia
    } else {
      if (sobrevivencia == 0) {
        data.sobrevivencia = null
      }
    }

    if (sorte != null) {
      data.sorte = sorte
    } else {
      if (sorte == 0) {
        data.sorte = null
      }
    }

    if (tatica != null) {
      data.tatica = tatica
    } else {
      if (tatica == 0) {
        data.tatica = null
      }
    }

    if (tecnologia != null) {
      data.tecnologia = tecnologia
    } else {
      if (tecnologia == 0) {
        data.tecnologia = null
      }
    }

    if (vontade != null) {
      data.vontade = vontade
    } else {
      if (vontade == 0) {
        data.vontade = null
      }
    }

    const PericiasAtt = await prisma.pericias.update({
      where: {
        id: data.id
      },
      data: data
    });

    return PericiasAtt;
  }
}

module.exports = EditPericiasUseCase;
