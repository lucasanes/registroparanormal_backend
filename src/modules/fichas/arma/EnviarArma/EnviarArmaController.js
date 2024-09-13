const EnviarArmaUseCase = require("./EnviarArmaUseCase");

class EnviarArmaController {
  async handle(request, response) {
    const { id, fichaId, sessaoId } = request.body;

    const enviarArmaUseCase = new EnviarArmaUseCase();

    const data = await enviarArmaUseCase.execute({
      id,
      fichaId,
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = EnviarArmaController;
