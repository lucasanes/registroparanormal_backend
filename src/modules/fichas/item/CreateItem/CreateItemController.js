const CreateItemUseCase = require("./CreateItemUseCase");

class CreateItemController {
  async handle(request, response) {
    const { nome, espaco, categoria, descricao, imagem, isMunicao, municao, municaoMax, fichaId } = request.body;

    const createItemUseCase = new CreateItemUseCase();

    const data = await createItemUseCase.execute({
      nome,
      espaco,
      categoria,
      descricao,
      imagem,
      isMunicao, 
      municao, 
      municaoMax,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateItemController;
