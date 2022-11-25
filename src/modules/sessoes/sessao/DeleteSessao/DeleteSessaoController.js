const DeleteSessaoUseCase = require("./DeleteSessaoUseCase");

class DeleteSessaoController {
    async handle(request, response) {
        const deleteSessaoUseCase = new DeleteSessaoUseCase();

        const {id} = request.params

        const sessao = await deleteSessaoUseCase.execute({id});
        response.json(sessao);
    }
}

module.exports = DeleteSessaoController;