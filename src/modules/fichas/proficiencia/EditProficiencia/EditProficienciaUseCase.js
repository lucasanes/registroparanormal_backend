const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class EditProficienciaUseCase {
  async execute({ id, nome }) {

    if (!id) {
      throw new AppError("ID não existente.");
    }

    const data = await prisma.proficiencia.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new AppError("Proficiência não existente.");
    }

    if (nome != undefined && nome != '') {
      if (nome.length < 3) {
        throw new AppError('O nome de sua proficiência deve ter no mínimo 3 caracteres.')
      }

      data.nome = nome

    }

    const proficienciaAtualizado = await prisma.proficiencia.update({
      where: {
        id,
      },
      data: data,
    });

    return proficienciaAtualizado;
  }
}

module.exports = EditProficienciaUseCase;
