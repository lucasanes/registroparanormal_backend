const GetUserUseCase = require("./GetUserUseCase");

class GetUserController {
    async handle(request, response) {
        const getUserUseCase = new GetUserUseCase();

        const users = await getUserUseCase.execute();
        response.status(200).json(users);
    }
}

module.exports = GetUserController;