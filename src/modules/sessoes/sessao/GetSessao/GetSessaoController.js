const GetSessaoUseCase = require("./GetSessaoUseCase");

class GetSessaoController {
    async handle(request,response) {
        const getSessaoUseCase = new GetSessaoUseCase();

        const sessoes = await getSessaoUseCase.execute();
        response.status(200).json(sessoes);
    }
}

module.exports = GetSessaoController;