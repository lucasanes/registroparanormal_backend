const CreateArmaUseCase = require("./CreateArmaUseCase");

class CreateArmaController {
  async handle(request, response) {
    const { nome, tipo, ataque, dano, margemCritico, danoCritico, recarga, alcance, especial, espaco, categoria, descricao, imagem, fichaId } = request.body;

    const createArmaUseCase = new CreateArmaUseCase();

    const data = await createArmaUseCase.execute({
      nome,
      tipo,
      ataque,
      dano,
      margemCritico,
      danoCritico,
      recarga,
      alcance,
      especial,
      espaco,
      categoria,
      descricao,
      imagem,
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateArmaController;
