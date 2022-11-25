const DeleteFichaUseCase = require("./DeleteFichaUseCase");

class DeleteFichaController {
    async handle(request, response) {
        const deleteFichaUseCase = new DeleteFichaUseCase();

        const {id} = request.params

        const ficha = await deleteFichaUseCase.execute({id});
        response.json(ficha);
    }
}

module.exports = DeleteFichaController;