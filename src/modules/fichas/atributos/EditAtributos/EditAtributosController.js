const EditAtributosUseCase = require("./EditAtributosUseCase");

class EditAtributosController {
  async handle(request, response) {
    const { agi, int, pre, vig, forca } = request.body;

    const { id } = request.params;
    const editAtributosUseCase = new EditAtributosUseCase();

    const data = await editAtributosUseCase.execute({
      id,
      agi,
      int,
      pre,
      vig,
      forca
    });
    response.status(201).json(data);
  }
}

module.exports = EditAtributosController;
