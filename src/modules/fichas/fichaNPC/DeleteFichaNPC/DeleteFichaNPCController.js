const DeleteFichaNPCUseCase = require("./DeleteFichaNPCUseCase");

class DeleteFichaNPCController {
    async handle(request, response) {
        const deleteFichaNPCUseCase = new DeleteFichaNPCUseCase();

        const { id } = request.params

        const fichaNPC = await deleteFichaNPCUseCase.execute({ id });
        response.json(fichaNPC);
    }
}

module.exports = DeleteFichaNPCController;