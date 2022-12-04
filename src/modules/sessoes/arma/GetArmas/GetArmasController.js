const GetArmasUseCase = require("./GetArmasUseCase");

class GetArmasController {
  async handle(request, response) {
    const getArmasUseCase = new GetArmasUseCase();

    const { id } = request.params;

    const armas = await getArmasUseCase.execute({ id });
    response.status(200).json(armas);
  }
}

module.exports = GetArmasController;
