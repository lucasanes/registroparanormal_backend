const GetFichaForImagemByIdUseCase = require("./GetFichaForImagemByIdUseCase");

class GetFichaForImagemByIdController {
    async handle(request, response) {
        const getFichaForImagemByIdUseCase = new GetFichaForImagemByIdUseCase();

        const { id } = request.params

        const ficha = await getFichaForImagemByIdUseCase.execute({ id });
        response.json(ficha);
    }
}

module.exports = GetFichaForImagemByIdController;