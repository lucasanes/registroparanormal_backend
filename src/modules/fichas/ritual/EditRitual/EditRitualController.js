const CreateRitualUseCase = require("./CreateRitualUseCase");

class CreateRitualController {
  async handle(request, response) {
    const { nome, circulo, alcance, elemento, execucao, duracao, alvo, resistencia, normal, discente, verdadeiro, descricao, imagem } = request.body;

    const { id } = request.params

    const createRitualUseCase = new CreateRitualUseCase();

    const data = await createRitualUseCase.execute({
      id,
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
      imagem
    });
    response.status(201).json(data);
  }
}

module.exports = CreateRitualController;
