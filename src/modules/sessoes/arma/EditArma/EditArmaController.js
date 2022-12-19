const EditArmaUseCase = require("./EditArmaUseCase");

class EditArmaController {
  async handle(request, response) {
    const { nome, tipo, dano, margemCritico, danoCritico, recarga, alcance, especial, espaco, categoria, municao, descricao, imagem, sessaoId } = request.body;

    const { id } = request.params;
    const editArmaUseCase = new EditArmaUseCase();

    const data = await editArmaUseCase.execute({
      id,
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
      municao,
      descricao,
      imagem,
      sessaoId
    });
    response.status(201).json(data);
  }
}

module.exports = EditArmaController;
