const CreateUserUseCase = require("./CreateUserUseCase");

class CreateUserController {
  async handle(request, response) {
    const { nome, username, email, senha } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({
      nome,
      username,
      email,
      senha
    });
    response.status(201).json(user);
  }
}

module.exports = CreateUserController;
