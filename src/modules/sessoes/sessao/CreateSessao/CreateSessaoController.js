const CreateSessaoUseCase = require("./CreateSessaoUseCase");

class CreateSessaoController {
  async handle(request, response) {
    const { nome, descricao, userId } = request.body;

    const createSessaoUseCase = new CreateSessaoUseCase();

    const sessao = await createSessaoUseCase.execute({
      nome,
      descricao,
      userId,

    });
    response.status(201).json(sessao);
  }
}

module.exports = CreateSessaoController;
