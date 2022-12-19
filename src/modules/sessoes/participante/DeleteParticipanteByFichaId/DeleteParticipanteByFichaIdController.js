const DeleteParticipanteByFichaIdUseCase = require("./DeleteParticipanteByFichaIdUseCase");

class DeleteParticipanteByFichaIdController {
  async handle(request, response) {
    const deleteParticipanteByFichaIdUseCase = new DeleteParticipanteByFichaIdUseCase();

    const { id } = request.params;

    const Participante = await deleteParticipanteByFichaIdUseCase.execute({ id });
    response.json(Participante);
  }
}

module.exports = DeleteParticipanteByFichaIdController;
