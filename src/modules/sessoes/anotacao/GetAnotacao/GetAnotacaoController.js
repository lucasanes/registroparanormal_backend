const GetAnotacaoUseCase = require("./GetAnotacaoUseCase");

class GetAnotacaoController {
  async handle(request, response) {
    const getAnotacaoUseCase = new GetAnotacaoUseCase();

    const { id } = request.params;

    const anotacoes = await getAnotacaoUseCase.execute({ id });
    response.status(200).json(anotacoes);
  }
}

module.exports = GetAnotacaoController;
