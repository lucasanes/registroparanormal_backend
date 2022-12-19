const EnviarArmaUseCase = require("./EnviarArmaUseCase");

class EnviarArmaController {
  async handle(request, response) {
    const { nome, tipo, dano, margemCritico, danoCritico, recarga, alcance, especial, espaco, categoria, descricao, imagem, fichaId } = request.body;

    const enviarArmaUseCase = new EnviarArmaUseCase();

    const data = await enviarArmaUseCase.execute({
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
      fichaId
    });
    response.status(201).json(data);
  }
}

module.exports = EnviarArmaController;
