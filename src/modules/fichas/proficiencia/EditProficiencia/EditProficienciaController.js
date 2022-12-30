const EditPoderUseCase = require("./EditPoderUseCase");

class EditPoderController {
  async handle(request, response) {
    const { nome } = request.body;

    const { id } = request.params;
    const editPoderUseCase = new EditPoderUseCase();

    const data = await editPoderUseCase.execute({
      id,
      nome,
    });
    response.status(201).json(data);
  }
}

module.exports = EditPoderController;
