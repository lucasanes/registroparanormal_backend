const { Router } = require("express");
const GetUserLoginController = require("../modules/users/GetUserLogin/GetUserLoginController");
const loginRouters = Router();
const getUserLoginController = new GetUserLoginController();
const CreateUserController = require("../modules/users/CreateUser/CreateUserController");
const createUserController = new CreateUserController();
loginRouters.post("/", getUserLoginController.handle);
loginRouters.post("/registrar", createUserController.handle);

module.exports = loginRouters;
