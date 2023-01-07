const CreateFichaUseCase = require("./CreateFichaUseCase");

class CreateFichaController {
  async handle(request, response) {
    const {
      npc, userId, sessaoId,
      nome, jogador, classe, origem, nacionalidade, idade, nex, trilha, patente,
      agi, int, vig, pre, forca,
      pvMax, sanMax, peMax
    } = request.body;

    const createFichaUseCase = new CreateFichaUseCase();

    const ficha = await createFichaUseCase.execute({
      npc,
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

module.exports = CreateFichaController;
