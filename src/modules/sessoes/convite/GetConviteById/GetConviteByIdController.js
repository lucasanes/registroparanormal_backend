const GetConviteByIdUseCase = require("./GetConviteByIdUseCase");

class GetConviteByIdController {
  async handle(request, response) {
    const getConviteByIdUseCase = new GetConviteByIdUseCase();

    const { id } = request.params

    const data = await getConviteByIdUseCase.execute({ id });
    response.json(data);
  }
}

module.exports = GetConviteByIdController;