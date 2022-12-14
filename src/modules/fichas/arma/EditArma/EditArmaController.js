const EditArmaUseCase = require("./EditArmaUseCase");

class EditArmaController {
  async handle(request, response) {
    const { nome, tipo, ataque, dano, margemCritico, danoCritico, recarga, alcance, especial, espaco, categoria, descricao, imagem } = request.body;

    const { id } = request.params;
    const editArmaUseCase = new EditArmaUseCase();

    const data = await editArmaUseCase.execute({
      id,
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
      imagem
    });
    response.status(201).json(data);
  }
}

module.exports = EditArmaController;
