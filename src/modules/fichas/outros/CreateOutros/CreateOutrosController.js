const CreateOutrosUseCase = require("./CreateOutrosUseCase");

class CreateOutrosController {
  async handle(request, response) {
    const { inventario, habilidades, detalhes, fichaId } = request.body;

    const createOutrosUseCase = new CreateOutrosUseCase();

    const data = await createOutrosUseCase.execute({
      inventario,
      habilidades,
      detalhes,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateOutrosController;
