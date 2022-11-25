const EditSessaoUseCase = require("./EditSessaoUseCase");

class EditSessaoController {
  async handle(request, response) {
    const { nome, descricao, userId } = request.body;

    const { id } = request.params;
    const editSessaoUseCase = new EditSessaoUseCase();

    const sessao = await editSessaoUseCase.execute({
      id,
      nome,
      descricao,
      userId,
    });
    response.status(201).json(sessao);
  }
}

module.exports = EditSessaoController;
