const EditUserUseCase = require("./EditUserUseCase");

class EditUserController {
  async handle(request, response) {
    const { nome, username, email, senha, senhaConfirmada, senhaAtual } = request.body;

    const {id} = request.params
    const editUserUseCase = new EditUserUseCase();

    const user = await editUserUseCase.execute({
      id,
      nome,
      username,
      email,
      senha,
      senhaConfirmada,
      senhaAtual
    });
    response.status(201).json(user);
  }
}

module.exports = EditUserController;
