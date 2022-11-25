const GetDadoByIdUseCase = require("./GetDadoByIdUseCase");

class GetDadoByIdController {
    async handle(request,response) {
        const getDadoByIdUseCase = new GetDadoByIdUseCase();

        const {id} = request.params

        const dado = await getDadoByIdUseCase.execute({id});
        response.status(200).json(dado);
    }
}

module.exports = GetDadoByIdController;