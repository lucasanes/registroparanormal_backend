const DeletePoderUseCase = require("./DeletePoderUseCase");

class DeletePoderController {
    async handle(request, response) {
        const deletePoderUseCase = new DeletePoderUseCase();

        const { id } = request.params

        const poder = await deletePoderUseCase.execute({ id });
        response.json(poder);
    }
}

module.exports = DeletePoderController;