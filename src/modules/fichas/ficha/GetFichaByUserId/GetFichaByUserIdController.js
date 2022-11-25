const GetFichaByUserIdUseCase = require("./GetFichaByUserIdUseCase");

class GetFichaByUserIdController {
    async handle(request,response) {
        const getFichaByUserIdUseCase = new GetFichaByUserIdUseCase();

        const {id} = request.params

        const fichas = await getFichaByUserIdUseCase.execute({id});
        response.status(200).json(fichas);
    }
}

module.exports = GetFichaByUserIdController;