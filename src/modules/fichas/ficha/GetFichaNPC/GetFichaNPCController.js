const GetFichaNPCUseCase = require("./GetFichaNPCUseCase");

class GetFichaNPCController {
    async handle(request, response) {
        const getFichaNPCUseCase = new GetFichaNPCUseCase();

        const { userId, sessaoId } = request.params

        const fichas = await getFichaNPCUseCase.execute({ userId, sessaoId });
        response.status(200).json(fichas);
    }
}

module.exports = GetFichaNPCController;