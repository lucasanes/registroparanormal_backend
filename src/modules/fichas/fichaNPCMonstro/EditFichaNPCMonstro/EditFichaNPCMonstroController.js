const EditFichaNPCMonstroUseCase = require("./EditFichaNPCMonstroUseCase");

class EditFichaNPCMonstroController {
  async handle(request, response) {
    const {
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
      detalhes
    } = request.body;

    const { id } = request.params

    const editFichaNPCMonstroUseCase = new EditFichaNPCMonstroUseCase();

    const fichaNPCMonstro = await editFichaNPCMonstroUseCase.execute({

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

    });
    response.status(201).json(fichaNPCMonstro);
  }
}

module.exports = EditFichaNPCMonstroController;
