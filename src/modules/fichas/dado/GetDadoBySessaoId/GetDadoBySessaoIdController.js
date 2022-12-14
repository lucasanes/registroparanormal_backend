const GetDadoBySessaoIdUseCase = require("./GetDadoBySessaoIdUseCase");

class GetDadoBySessaoIdController {
  async handle(request, response) {
    const getDadoBySessaoIdUseCase = new GetDadoBySessaoIdUseCase();

    const { id } = request.params;

    const dados = await getDadoBySessaoIdUseCase.execute({ id });
    response.status(200).json(dados);
  }
}

module.exports = GetDadoBySessaoIdController;
