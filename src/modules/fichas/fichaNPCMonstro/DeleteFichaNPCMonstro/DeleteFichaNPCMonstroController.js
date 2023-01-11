const DeleteFichaNPCMonstroUseCase = require("./DeleteFichaNPCMonstroUseCase");

class DeleteFichaNPCMonstroController {
    async handle(request, response) {
        const deleteFichaNPCMonstroUseCase = new DeleteFichaNPCMonstroUseCase();

        const { id } = request.params

        const fichaNPCMonstro = await deleteFichaNPCMonstroUseCase.execute({ id });
        response.json(fichaNPCMonstro);
    }
}

module.exports = DeleteFichaNPCMonstroController;