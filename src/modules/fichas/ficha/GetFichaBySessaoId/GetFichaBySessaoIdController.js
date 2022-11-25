const GetFichaBySessaoIdUseCase = require("./GetFichaBySessaoIdUseCase");

class GetFichaBySessaoIdController {
    async handle(request,response) {
        const getFichaBySessaoIdUseCase = new GetFichaBySessaoIdUseCase();

        const {id} = request.params

        const fichas = await getFichaBySessaoIdUseCase.execute({id});
        response.status(200).json(fichas);
    }
}

module.exports = GetFichaBySessaoIdController;