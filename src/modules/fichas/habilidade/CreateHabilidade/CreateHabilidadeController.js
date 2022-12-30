const CreateHabilidadeUseCase = require("./CreateHabilidadeUseCase");

class CreateHabilidadeController {
  async handle(request, response) {
    const { nome, descricao, fichaId } = request.body;

    const createHabilidadeUseCase = new CreateHabilidadeUseCase();

    const data = await createHabilidadeUseCase.execute({
      nome,
      descricao,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateHabilidadeController;
