const GetSessaoByUserIdUseCase = require("./GetSessaoByUserIdUseCase");

class GetSessaoByUserIdController {
    async handle(request, response) {
        const getSessaoByUserIdUseCase = new GetSessaoByUserIdUseCase();

        const {id} = request.params

        const sessao = await getSessaoByUserIdUseCase.execute({id});
        response.json(sessao);
    }
}

module.exports = GetSessaoByUserIdController;