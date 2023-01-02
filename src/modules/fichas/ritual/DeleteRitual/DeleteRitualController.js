const DeleteRitualUseCase = require("./DeleteRitualUseCase");

class DeleteRitualController {
  async handle(request, response) {
    const deleteRitualUseCase = new DeleteRitualUseCase();

    const { id } = request.params;

    const ritual = await deleteRitualUseCase.execute({ id });
    response.json(ritual);
  }
}

module.exports = DeleteRitualController;
