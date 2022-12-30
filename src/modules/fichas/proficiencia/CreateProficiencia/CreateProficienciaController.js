const CreateProficienciaUseCase = require("./CreateProficienciaUseCase");

class CreateProficienciaController {
  async handle(request, response) {
    const { nome, fichaId } = request.body;

    const createProficienciaUseCase = new CreateProficienciaUseCase();

    const data = await createProficienciaUseCase.execute({
      nome,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateProficienciaController;
