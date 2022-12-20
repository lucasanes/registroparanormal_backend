const EditAnotacaoUseCase = require("./EditFichaUseCase");

class EditAnotacaoController {
  async handle(request, response) {
    const { isPublic, userId, sessaoId } = request.body;

    const { id } = request.params;
    const editAnotacaoUseCase = new EditAnotacaoUseCase();

    const data = await editAnotacaoUseCase.execute({
      id,
      isPublic,
      userId,
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = EditAnotacaoController;
