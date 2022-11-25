const CreateFichaUseCase = require("./CreateFichaUseCase");

class CreateFichaController {
  async handle(request, response) {
    const { userId, sessaoId } = request.body;

    const createFichaUseCase = new CreateFichaUseCase();

    const ficha = await createFichaUseCase.execute({
      userId,
      sessaoId
    });
    response.status(201).json(ficha);
  }
}

module.exports = CreateFichaController;
