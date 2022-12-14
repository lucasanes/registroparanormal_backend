const EditStatusUseCase = require("./EditStatusUseCase");

class EditStatusController {
  async handle(request, response) {
    const { combate, insano, danoMassivo, inconsciente, pv, pvMax, ps, psMax, pe, peMax, municao, municaoMax } = request.body;

    const { id } = request.params;
    const editStatusUseCase = new EditStatusUseCase();

    const data = await editStatusUseCase.execute({
      id,
      combate,
      insano,
      danoMassivo,
      inconsciente,
      pv,
      pvMax,
      ps,
      psMax,
      pe,
      peMax,
      municao,
      municaoMax
    });
    response.status(201).json(data);
  }
}

module.exports = EditStatusController;
