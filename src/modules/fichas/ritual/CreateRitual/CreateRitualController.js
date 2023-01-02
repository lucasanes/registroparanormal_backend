const CreateRitualUseCase = require("./CreateRitualUseCase");

class CreateRitualController {
  async handle(request, response) {
    const { nome, circulo, alcance, elemento, execucao, duracao, alvo, resistencia, normal, discente, verdadeiro, descricao, imagem, fichaId } = request.body;

    const createRitualUseCase = new CreateRitualUseCase();

    const data = await createRitualUseCase.execute({
      nome,
      circulo,
      alcance,
      elemento,
      execucao,
      duracao,
      alvo,
      resistencia,
      normal,
      discente,
      verdadeiro,
      descricao,
      imagem,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateRitualController;
