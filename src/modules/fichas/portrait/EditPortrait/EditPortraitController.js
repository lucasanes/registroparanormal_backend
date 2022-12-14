const EditPortraitUseCase = require("./EditPortraitUseCase");

class EditPortraitController {
  async handle(request, response) {
    const { normal, ferido, insano, insanoeferido, morrendo } = request.body;

    const { id } = request.params;
    const editPortraitUseCase = new EditPortraitUseCase();

    const data = await editPortraitUseCase.execute({
      id,
      normal,
      ferido,
      insano,
      insanoeferido,
      morrendo
    });
    response.status(201).json(data);
  }
}

module.exports = EditPortraitController;
