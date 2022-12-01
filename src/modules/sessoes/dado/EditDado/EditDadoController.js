const EditDadoUseCase = require("./EditDadoUseCase");

class EditDadoController {
  async handle(request, response) {
    const { nome, valor, isDano } = request.body;

    const { id } = request.params;
    const editDadoUseCase = new EditDadoUseCase();

    const data = await editDadoUseCase.execute({
      id,
      nome,
      valor,
      isDano
    });
    response.status(201).json(data);
  }
}

module.exports = EditDadoController;
