const EditPrincipalUseCase = require("./EditPrincipalUseCase");

class EditPrincipalController {
  async handle(request, response) {
    const { nome, classe, origem, nacionalidade, idade, idadeAdicional, nex, trilha, patente, peprod } = request.body;

    const { id } = request.params;
    const editPrincipalUseCase = new EditPrincipalUseCase();

    const data = await editPrincipalUseCase.execute({
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

module.exports = EditPrincipalController;
