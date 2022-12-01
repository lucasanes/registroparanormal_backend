const DeleteAnotacaoUseCase = require("./DeleteAnotacaoUseCase");

class DeleteAnotacaoController {
  async handle(request, response) {
    const deleteAnotacaoUseCase = new DeleteAnotacaoUseCase();

    const { id } = request.params;

    const anotacao = await deleteAnotacaoUseCase.execute({ id });
    response.json(anotacao);
  }
}

module.exports = DeleteAnotacaoController;
