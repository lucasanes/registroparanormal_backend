const AppError = require("../../../utils/AppError");
const prisma = require("../../database/prisma");
const { hash } = require("bcrypt");

const emailRegex = /^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const senhaRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%*_&^-]{8,24})$/;

class CreateUserUseCase {
  async execute({ nome, username, email, senha }) {
    if (nome == undefined || nome == "") {
      throw new AppError("Dados necessários não preenchidos.");
    }

    if (nome.length < 3) {
      throw new AppError("Seu nome precisa ter no mínimo 3 caracteres.");
    }

    const verificarEspaco = /\s/g.test(nome);

    if (verificarEspaco) {
      throw new AppError("Seu nome não pode conter espaços.");
    }

    nome = nome[0].toUpperCase() + nome.substring(1);

    if (username == undefined || username == "") {
      throw new AppError("Dados necessários não preenchidos.");
    }

    username = username.toLowerCase();

    if (username.length < 3) {
      throw new AppError("Seu username precisa ter no mínimo 3 caracteres.");
    }

    const verificarEspaco2 = /\s/g.test(username);

    if (verificarEspaco2) {
      throw new AppError("Seu username não pode conter espaços.");
    }

    const usernameAlreadyExists = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (usernameAlreadyExists) {
      throw new AppError("Username já cadastrado.");
    }

    if (email == undefined || email == "") {
      throw new AppError("Dados necessários não preenchidos.");
    }

    if (!emailRegex.test(email)) {
      throw new AppError("Email inválido.");
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailAlreadyExists) {
      throw new AppError("Email já cadastrado.");
    }

    if (senha == undefined || senha == "") {
      throw new AppError("Dados necessários não preenchidos.");
    }

    if (senha.length < 8) {
      throw new AppError("Sua senha precisa ter no mínimo 8 caracteres.");
    } else if (senha.length > 24) {
      throw new AppError("Sua senha não pode passar de 24 caracteres.");
    }

    if (!senhaRegex.test(senha)) {
      throw new AppError(
        "Sua senha precisa ter um caractere minúsculo, um maíusculo e um número."
      );
    }

    const senhaCript = await hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        nome,
        username,
        email,
        senha: senhaCript,
      },
    });

    return user;
  }
}

module.exports = CreateUserUseCase;
