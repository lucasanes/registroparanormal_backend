const EnviarItemUseCase = require("./EnviarItemUseCase");

class EnviarItemController {
  async handle(request, response) {
    const { nome, espaco, categoria, descricao, imagem, fichaId } = request.body;

    const enviarItemUseCase = new EnviarItemUseCase();

    const data = await enviarItemUseCase.execute({
      nome,
      espaco,
      categoria,
      descricao,
      imagem,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = EnviarItemController;
