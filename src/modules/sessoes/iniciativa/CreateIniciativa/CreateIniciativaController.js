const CreateIniciativaUseCase = require("./CreateIniciativaUseCase");

class CreateIniciativaController {
  async handle(request, response) {
    const { nome, iniciativa, dano, sessaoId } = request.body;

    const createIniciativaUseCase = new CreateIniciativaUseCase();

    const data = await createIniciativaUseCase.execute({
      nome,
      iniciativa,
      dano,
      sessaoId,
    });
    response.status(201).json(data);
  }
}

module.exports = CreateIniciativaController;
