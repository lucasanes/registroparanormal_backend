const AppError = require("../../../../utils/AppError");
const prisma = require("../../../database/prisma");

class CreateArmaUseCase {
  async execute({ nome, tipo, dano, ataque, margemCritico, danoCritico, recarga, alcance, especial, espaco, categoria, descricao, imagem, fichaId }) {

    const nomeLower = nome.toLowerCase()

    if (fichaId != undefined && fichaId != '') {

      const fichaIdAlreadyExists = await prisma.ficha.findFirst({
        where: {
          id: fichaId,
        },
      });

      if (!fichaIdAlreadyExists) {
        throw new AppError("Não existe nenhuma sessão com o ID passado.");
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (nome != undefined && nome != '') {

      const alreadyExistsByName = await prisma.arma.findFirst({
        where: {
          nome: nomeLower,
          fichaId
        }
      })

      const alreadyExistsByItemName = await prisma.item.findFirst({
        where: {
          nome: nomeLower,
          fichaId
        }
      })

      if (alreadyExistsByName) {
        throw new AppError("Você já tem uma arma com este nome.")
      }

      if (alreadyExistsByItemName) {
        throw new AppError("Você já tem um item com este nome.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (margemCritico != undefined && margemCritico != '') {
      if (Number(margemCritico) < 5 || Number(margemCritico) > 20) {
        throw new AppError("A margem do crítico deve ser de 5 a 20.")
      }
    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

   
    if (tipo == undefined || tipo == '') {
      throw new AppError("Dados necessários não preenchidos.")
    } else {
      if (tipo.includes(" ")) {
        throw new AppError("O tipo da sua arma não pode conter espaços.")
      }
    }

    if (espaco != undefined && espaco != '') {

      if (Number(espaco) > 9) {
        throw new AppError("O máximo de espaços que uma arma pode ter é 9.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (categoria != undefined && categoria != '') {

      if (Number(categoria) < 0 || Number(categoria) > 4) {
        throw new AppError("A categoria de uma arma tem que ser entre 0 e 5.")
      }

    } else {
      throw new AppError("Dados necessários não preenchidos.")
    }

    if (alcance == undefined || alcance == '') {
      throw new AppError("Dados necessários não preenchidos.")
    }

    let especialLower = especial;

    if (especial != null) {
      especialLower = especial.toLowerCase()
    }

    const data = await prisma.arma.create({
      data: {
        nome: nomeLower,
        tipo: tipo.toLowerCase(),
        dano,
        ataque,
        margemCritico: Number(margemCritico),
        danoCritico,
        recarga: Number(recarga),
        alcance: alcance.toLowerCase(),
        especial: especialLower,
        espaco: Number(espaco),
        categoria: Number(categoria),
        descricao,
        imagem,
        fichaId
      },
    });

    return data;
  }
}

module.exports = CreateArmaUseCase;
