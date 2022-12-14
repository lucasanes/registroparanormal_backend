const GetConviteUseCase = require("./GetConviteUseCase");

class GetConviteController {
  async handle(request, response) {
    const getConviteUseCase = new GetConviteUseCase();

    const { email } = request.params

    const data = await getConviteUseCase.execute({ email });
    response.json(data);
  }
}

module.exports = GetConviteController;