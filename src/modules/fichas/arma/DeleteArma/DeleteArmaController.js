const DeleteArmaUseCase = require("./DeleteArmaUseCase");

class DeleteArmaController {
  async handle(request, response) {
    const deleteArmaUseCase = new DeleteArmaUseCase();

    const { id } = request.params;

    const arma = await deleteArmaUseCase.execute({ id });
    response.json(arma);
  }
}

module.exports = DeleteArmaController;
