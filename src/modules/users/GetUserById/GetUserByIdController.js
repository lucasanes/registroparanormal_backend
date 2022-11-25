const GetUserByIdUseCase = require("./GetUserByIdUseCase");

class GetUserByIdController {
    async handle(request, response) {
        const getUserByIdUseCase = new GetUserByIdUseCase();

        const {id} = request.params

        const user = await getUserByIdUseCase.execute({id});
        response.json(user);
    }
}

module.exports = GetUserByIdController;