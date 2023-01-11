const EditFichaNPCMonstroStatusUseCase = require("./EditFichaNPCMonstroStatusUseCase");

class EditFichaNPCMonstroStatusController {
  async handle(request, response) {
    const {
      pv,
      pvMax,
    } = request.body;

    const { id } = request.params

    const editFichaNPCMonstroStatusUseCase = new EditFichaNPCMonstroStatusUseCase();

    const fichaNPCMonstroStatus = await editFichaNPCMonstroStatusUseCase.execute({

      id,

      pv,
      pvMax,

    });
    response.status(201).json(fichaNPCMonstroStatus);
  }
}

module.exports = EditFichaNPCMonstroStatusController;
