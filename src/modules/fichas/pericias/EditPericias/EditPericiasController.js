const EditPericiasUseCase = require("./EditPericiasUseCase");

class EditPericiasController {
  async handle(request, response) {
    const { acrobacia, adestramento, arte, atletismo, atualidade, ciencia, crime, diplomacia, enganacao, fortitude, furtividade, iniciativa, intimidacao, intuicao, investigacao, luta, medicina, ocultismo, percepcao, pilotagem, pontaria, profissao, reflexo, religiao, sobrevivencia, sorte, tatica, tecnologia, vontade } = request.body;

    const { id } = request.params;
    const editPericiasUseCase = new EditPericiasUseCase();

    const data = await editPericiasUseCase.execute({
      id,
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
      vontade
    });
    response.status(201).json(data);
  }
}

module.exports = EditPericiasController;
