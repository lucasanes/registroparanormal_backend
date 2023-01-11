const EditFichaNPCUseCase = require("./EditFichaNPCStatusUseCase");

class EditFichaNPCController {
  async handle(request, response) {
    const {
      pv,
      ps,
      pe,
      pvMax,
      psMax,
      peMax,
    } = request.body;

    const { id } = request.params

    const editFichaNPCUseCase = new EditFichaNPCUseCase();

    const fichaNPC = await editFichaNPCUseCase.execute({
      id,

      pv,
      ps,
      pe,
      pvMax,
      psMax,
      peMax,

    });
    response.status(201).json(fichaNPC);
  }
}

module.exports = EditFichaNPCController;
