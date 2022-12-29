const EditDefesasUseCase = require("./EditDefesasUseCase");

class EditDefesasController {
  async handle(request, response) {
    const { passiva, bloqueio, esquiva, fisica, balistica, corte, impacto, perfuracao, eletricidade, fogo, frio, quimica, mental, morte, conhecimento, sangue, energia } = request.body;

    const { id } = request.params;
    const editDefesasUseCase = new EditDefesasUseCase();

    const data = await editDefesasUseCase.execute({
      id,
      passiva,
      bloqueio,
      esquiva,
      fisica,
      balistica,
      corte,
      impacto,
      perfuracao,
      eletricidade,
      fogo,
      frio,
      quimica,
      mental,
      morte,
      conhecimento,
      sangue,
      energia
    });
    response.status(201).json(data);
  }
}

module.exports = EditDefesasController;
