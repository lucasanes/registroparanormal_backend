const DeleteProficienciaUseCase = require("./DeleteProficienciaUseCase");

class DeleteProficienciaController {
    async handle(request, response) {
        const deleteProficienciaUseCase = new DeleteProficienciaUseCase();

        const { id } = request.params

        const proficiencia = await deleteProficienciaUseCase.execute({ id });
        response.json(proficiencia);
    }
}

module.exports = DeleteProficienciaController;