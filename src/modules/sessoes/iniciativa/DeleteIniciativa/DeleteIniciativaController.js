const DeleteIniciativaUseCase = require("./DeleteIniciativaUseCase");

class DeleteIniciativaController {
  async handle(request, response) {
    const deleteIniciativaUseCase = new DeleteIniciativaUseCase();

    const { id } = request.params;

    const iniciativa = await deleteIniciativaUseCase.execute({ id });
    response.json(iniciativa);
  }
}

module.exports = DeleteIniciativaController;
