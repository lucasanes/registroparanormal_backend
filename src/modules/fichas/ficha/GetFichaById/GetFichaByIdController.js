const GetFichaByIdUseCase = require("./GetFichaByIdUseCase");

class GetFichaByIdController {
    async handle(request, response) {
        const getFichaByIdUseCase = new GetFichaByIdUseCase();

        const {id} = request.params

        const ficha = await getFichaByIdUseCase.execute({id});
        response.json(ficha);
    }
}

module.exports = GetFichaByIdController;