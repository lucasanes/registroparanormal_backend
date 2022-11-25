const AppError = require("../../../utils/AppError");
const GetUserLoginUseCase = require("./GetUserLoginUseCase");

class GetUserLoginController {
  async handle(request, response) {

    const {username, email, senha} = request.body;

    const getUserLoginUseCase = new GetUserLoginUseCase();

    const user = await getUserLoginUseCase.execute({
        username,
        email,
        senha,
    });
    response.status(200).json(user);
  }
}

module.exports = GetUserLoginController;
