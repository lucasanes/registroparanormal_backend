const CreateArmaUseCase = require("./CreateArmaUseCase");

class CreateArmaController {
  async handle(request, response) {
    const { nome, tipo, dano, margemCritico, danoCritico, recarga, alcance, especial, espaco, categoria, descricao, imagem, sessaoId } = request.body;

    const createArmaUseCase = new CreateArmaUseCase();

    const data = await createArmaUseCase.execute({
      nome,
      tipo,
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
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = CreateArmaController;
