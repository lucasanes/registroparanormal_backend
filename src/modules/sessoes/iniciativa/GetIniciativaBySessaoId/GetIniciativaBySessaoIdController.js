const GetIniciativaBySessaoIdUseCase = require("./GetIniciativaBySessaoIdUseCase");

class GetIniciativaBySessaoIdController {
  async handle(request, response) {
    const getIniciativaBySessaoIdUseCase = new GetIniciativaBySessaoIdUseCase();

    const { id } = request.params;

    const iniciativas = await getIniciativaBySessaoIdUseCase.execute({ id });
    response.status(200).json(iniciativas);
  }
}

module.exports = GetIniciativaBySessaoIdController;
