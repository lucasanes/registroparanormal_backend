const EditPersonagemUseCase = require("./EditPersonagemUseCase");

class EditPersonagemController {
  async handle(request, response) {
    const { historia, aparencia, pep, dfm, favoritos, personalidade, piorPesadelo, anotacoesPersonagem, anotacoesPlayer } = request.body;

    const { id } = request.params;
    const editPersonagemUseCase = new EditPersonagemUseCase();

    const data = await editPersonagemUseCase.execute({
      id,
      historia,
      aparencia,
      pep,
      dfm,
      favoritos,
      personalidade,
      piorPesadelo,
      anotacoesPersonagem,
      anotacoesPlayer
    });
    response.status(201).json(data);
  }
}

module.exports = EditPersonagemController;
