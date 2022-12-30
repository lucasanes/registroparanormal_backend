const EditProficienciaUseCase = require("./EditProficienciaUseCase");

class EditProficienciaController {
  async handle(request, response) {
    const { nome } = request.body;

    const { id } = request.params;
    const editProficienciaUseCase = new EditProficienciaUseCase();

    const data = await editProficienciaUseCase.execute({
      id,
      nome,
    });
    response.status(201).json(data);
  }
}

module.exports = EditProficienciaController;
