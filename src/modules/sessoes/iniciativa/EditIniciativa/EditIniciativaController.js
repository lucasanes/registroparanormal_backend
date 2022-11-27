const EditIniciativaUseCase = require("./EditIniciativaUseCase");

class EditIniciativaController {
  async handle(request, response) {
    const { posicao, nome, iniciativa, dano } = request.body;

    const { id } = request.params;
    const editIniciativaUseCase = new EditIniciativaUseCase();

    const data = await editIniciativaUseCase.execute({
      id,
      posicao, 
      nome, 
      iniciativa, 
      dano,
    });
    response.status(201).json(data);
  }
}

module.exports = EditIniciativaController;
