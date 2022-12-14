const CreateItemUseCase = require("./CreateItemUseCase");

class CreateItemController {
  async handle(request, response) {
    const { nome, espaco, categoria, descricao, imagem, fichaId } = request.body;

    const createItemUseCase = new CreateItemUseCase();

    const data = await createItemUseCase.execute({
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

module.exports = CreateItemController;
