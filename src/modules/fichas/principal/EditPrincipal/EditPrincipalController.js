const EditPortraitUseCase = require("./EditPortraitUseCase");

class EditPortraitController {
  async handle(request, response) {
    const { nome, classe, origem, nacionalidade, idade, idadeAdicional, nex, trilha, patente, peprod } = request.body;

    const { id } = request.params;
    const editPortraitUseCase = new EditPortraitUseCase();

    const data = await editPortraitUseCase.execute({
      id,
      nome,
      classe,
      origem,
      nacionalidade,
      idade,
      idadeAdicional,
      nex,
      trilha,
      patente,
      peprod
    });
    response.status(201).json(data);
  }
}

module.exports = EditPortraitController;
