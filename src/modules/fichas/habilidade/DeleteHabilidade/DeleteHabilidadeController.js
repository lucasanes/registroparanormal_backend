const DeleteHabilidadeUseCase = require("./DeleteHabilidadeUseCase");

class DeleteHabilidadeController {
    async handle(request, response) {
        const deleteHabilidadeUseCase = new DeleteHabilidadeUseCase();

        const { id } = request.params

        const habilidade = await deleteHabilidadeUseCase.execute({ id });
        response.json(habilidade);
    }
}

module.exports = DeleteHabilidadeController;