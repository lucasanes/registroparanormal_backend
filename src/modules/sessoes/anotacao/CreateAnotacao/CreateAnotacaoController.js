const CreateAnotacaoUseCase = require("./CreateAnotacaoUseCase");

class CreateAnotacaoController {
  async handle(request, response) {
    const { nome, descricao, sessaoId } = request.body;

    const createAnotacaoUseCase = new CreateAnotacaoUseCase();

    const data = await createAnotacaoUseCase.execute({
      nome,
      descricao,
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateAnotacaoController;
