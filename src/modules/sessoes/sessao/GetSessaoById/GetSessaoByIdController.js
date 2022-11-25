const GetSessaoByIdUseCase = require("./GetSessaoByIdUseCase");

class GetSessaoByIdController {
    async handle(request, response) {
        const getSessaoByIdUseCase = new GetSessaoByIdUseCase();

        const {id} = request.params

        const sessao = await getSessaoByIdUseCase.execute({id});
        response.json(sessao);
    }
}

module.exports = GetSessaoByIdController;