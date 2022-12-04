const GetItensUseCase = require("./GetItensUseCase");

class GetItensController {
  async handle(request, response) {
    const getItensUseCase = new GetItensUseCase();

    const { id } = request.params;

    const itens = await getItensUseCase.execute({ id });
    response.status(200).json(itens);
  }
}

module.exports = GetItensController;
