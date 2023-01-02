const EditRitualUseCase = require("./EditRitualUseCase");

class EditRitualController {
  async handle(request, response) {
    const { nome, circulo, alcance, elemento, execucao, duracao, alvo, resistencia, normal, discente, verdadeiro, descricao, imagem } = request.body;

    const { id } = request.params

    const editRitualUseCase = new EditRitualUseCase();

    const data = await editRitualUseCase.execute({
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

module.exports = EditRitualController;
