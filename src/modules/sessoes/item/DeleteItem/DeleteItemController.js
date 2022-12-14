const DeleteItemUseCase = require("./DeleteItemUseCase");

class DeleteItemController {
  async handle(request, response) {
    const deleteItemUseCase = new DeleteItemUseCase();

    const { id } = request.params;

    const item = await deleteItemUseCase.execute({ id });
    response.json(item);
  }
}

module.exports = DeleteItemController;
