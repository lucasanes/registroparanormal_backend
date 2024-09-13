const EnviarItemUseCase = require("./EnviarItemUseCase");

class EnviarItemController {
  async handle(request, response) {
    const { id, fichaId, sessaoId } = request.body;

    const enviarItemUseCase = new EnviarItemUseCase();

    const data = await enviarItemUseCase.execute({
      id,
      fichaId,
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = EnviarItemController;
