const CreateParticipanteUseCase = require("./CreateParticipanteUseCase");

class CreateParticipanteController {
  async handle(request, response) {
    const { userId, fichaId, sessaoId } = request.body;

    const createParticipanteUseCase = new CreateParticipanteUseCase();

    const data = await createParticipanteUseCase.execute({
      userId,
      fichaId,
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateParticipanteController;
