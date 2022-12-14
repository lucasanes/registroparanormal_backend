const DeleteConviteUseCase = require("./DeleteConviteUseCase");

class DeleteConviteController {
  async handle(request, response) {
    const deleteConviteUseCase = new DeleteConviteUseCase();

    const { id } = request.params;

    const data = await deleteConviteUseCase.execute({ id });
    response.json(data);
  }
}

module.exports = DeleteConviteController;
