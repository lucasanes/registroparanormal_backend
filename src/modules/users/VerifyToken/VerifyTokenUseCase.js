const AppError = require("../../../utils/AppError");
const prisma = require("../../database/prisma");
const jwt = require("jsonwebtoken");

class VerifyTokenUseCase {
  async execute({ token }) {

    const SECRET_KEY = '5c72ca07c60df05fdc2734b03a9c2593'

    let tokenIsValid

    if (token == undefined || token == null || token == '') {
        throw new AppError("Você precisa passar o token.")
    }

    if (!token) {
        throw new AppError("Token inválido.")
    } else {

        try {

            if (jwt.verify(token, SECRET_KEY)) {
                tokenIsValid = true
            }

        } catch (erro) {
            tokenIsValid = false
        }

    }
    
    return {tokenIsValid};
  }
}

module.exports = VerifyTokenUseCase;
