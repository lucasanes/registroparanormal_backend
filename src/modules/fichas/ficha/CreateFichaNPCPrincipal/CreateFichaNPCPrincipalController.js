const CreateFichaNPCPrincipalUseCase = require("./CreateFichaNPCPrincipalUseCase");

class CreateFichaNPCPrincipalController {
  async handle(request, response) {
    const {
      userId, sessaoId,
      nome, jogador, classe, origem, nacionalidade, idade, nex, trilha, patente,
      agi, int, vig, pre, forca,
      pvMax, sanMax, peMax
    } = request.body;

    const createFichaNPCPrincipalUseCase = new CreateFichaNPCPrincipalUseCase();

    const ficha = await createFichaNPCPrincipalUseCase.execute({
      userId,
      sessaoId,

      nome,
      jogador,
      classe,
      origem,
      nacionalidade,
      idade,
      nex,
      trilha,
      patente,

      agi,
      int,
      vig,
      pre,
      forca,

      pvMax,
      sanMax,
      peMax,

    });
    response.status(201).json(ficha);
  }
}

module.exports = CreateFichaNPCPrincipalController;
