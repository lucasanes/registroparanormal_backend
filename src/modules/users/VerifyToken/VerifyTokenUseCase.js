const auth = require("../../../config/auth");
const AppError = require("../../../utils/AppError");
const prisma = require("../../database/prisma");
const jwt = require("jsonwebtoken");

class VerifyTokenUseCase {
  async execute({ token }) {
    let tokenIsValid;

    if (token == undefined || token == null || token == "") {
      throw new AppError("Você precisa passar o token.");
    }

    if (!token) {
      throw new AppError("Token inválido.");
    }

    try {
      if (jwt.verify(token, auth.jwt.secretUser)) {
        tokenIsValid = true;
      }
    } catch (erro) {
      tokenIsValid = false;
      return;
    }

    const id = jwt.decode(token, auth.jwt.secretUser).id;

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return { tokenIsValid, user };
  }
}

module.exports = VerifyTokenUseCase;
