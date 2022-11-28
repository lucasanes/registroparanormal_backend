const EditIniciativaByPosicaoUseCase = require("./EditIniciativaByPosicaoUseCase");

class EditIniciativaByPosicaoController {
  async handle(request, response) {
    const { posicao, nome, iniciativa, dano } = request.body;

    const { id } = request.params;
    const editIniciativaByPosicaoUseCase = new EditIniciativaByPosicaoUseCase();

    const data = await editIniciativaByPosicaoUseCase.execute({
      id,
      posicao, 
      nome, 
      iniciativa, 
      dano,
    });
    response.status(201).json(data);
  }
}

module.exports = EditIniciativaByPosicaoController;
