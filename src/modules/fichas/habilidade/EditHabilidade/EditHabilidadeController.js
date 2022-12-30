const EditHabilidadeUseCase = require("./EditHabilidadeUseCase");

class EditHabilidadeController {
  async handle(request, response) {
    const { nome, descricao } = request.body;

    const { id } = request.params;
    const editHabilidadeUseCase = new EditHabilidadeUseCase();

    const data = await editHabilidadeUseCase.execute({
      id,
      nome,
      descricao,
    });
    response.status(201).json(data);
  }
}

module.exports = EditHabilidadeController;
