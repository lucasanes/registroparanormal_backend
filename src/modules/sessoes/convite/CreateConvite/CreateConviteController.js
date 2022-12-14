const CreateConviteUseCase = require("./CreateConviteUseCase");

class CreateConviteController {
  async handle(request, response) {
    const { userEmail, sessaoId } = request.body;

    const createConviteUseCase = new CreateConviteUseCase();

    const data = await createConviteUseCase.execute({
      userEmail,
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateConviteController;
