const CreateDadoUseCase = require("./CreateDadoUseCase");

class CreateDadoController {
  async handle(request, response) {
    const { nome, valor, isDano, fichaId } = request.body;

    const createDadoUseCase = new CreateDadoUseCase();

    const dado = await createDadoUseCase.execute({
        nome, 
        valor, 
        isDano, 
        fichaId,
    });
    response.status(201).json(dado);
  }
}

module.exports = CreateDadoController;
