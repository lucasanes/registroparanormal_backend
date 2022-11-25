const DeleteUserUseCase = require("./DeleteUserUseCase");

class DeleteUserController {
    async handle(request, response) {
        const deleteUserUseCase = new DeleteUserUseCase();

        const {id} = request.params

        const user = await deleteUserUseCase.execute({id});
        response.json(user);
    }
}

module.exports = DeleteUserController;