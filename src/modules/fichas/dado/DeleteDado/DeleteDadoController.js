const DeleteDadoUseCase = require("./DeleteDadoUseCase");

class DeleteDadoController {
    async handle(request, response) {
        const deleteDadoUseCase = new DeleteDadoUseCase();

        const {id} = request.params

        const dado = await deleteDadoUseCase.execute({id});
        response.json(dado);
    }
}

module.exports = DeleteDadoController;