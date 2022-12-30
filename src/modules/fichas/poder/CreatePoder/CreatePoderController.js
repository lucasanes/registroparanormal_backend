const CreatePoderUseCase = require("./CreatePoderUseCase");

class CreatePoderController {
  async handle(request, response) {
    const { nome, descricao, fichaId } = request.body;

    const createPoderUseCase = new CreatePoderUseCase();

    const data = await createPoderUseCase.execute({
      nome,
      descricao,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = CreatePoderController;
