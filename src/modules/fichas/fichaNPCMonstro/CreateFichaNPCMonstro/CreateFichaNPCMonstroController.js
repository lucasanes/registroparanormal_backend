const CreateFichaNPCMonstroUseCase = require("./CreateFichaNPCMonstroUseCase");

class CreateFichaNPCMonstroController {
  async handle(request, response) {
    const {
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
      sorte,
      tatica,
      tecnologia,
      vontade,
      passiva,
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
    } = request.body;

    const createFichaNPCMonstroUseCase = new CreateFichaNPCMonstroUseCase();

    const fichaNPCMonstro = await createFichaNPCMonstroUseCase.execute({

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
      sorte,
      
      tatica,
      tecnologia,
      vontade,
      passiva,
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

    });
    response.status(201).json(fichaNPCMonstro);
  }
}

module.exports = CreateFichaNPCMonstroController;
