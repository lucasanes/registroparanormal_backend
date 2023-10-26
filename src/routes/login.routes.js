const { Router } = require("express");
const GetUserLoginController = require("../modules/users/GetUserLogin/GetUserLoginController");
const loginRouters = Router();
const getUserLoginController = new GetUserLoginController();
const CreateUserController = require("../modules/users/CreateUser/CreateUserController");
const createUserController = new CreateUserController();
const SendRecoveryController = require("../modules/recovery/SendRecovery/SendRecoveryController");
const sendRecoveryController = new SendRecoveryController();

const GetRecoveryController = require("../modules/recovery/GetRecovery/GetRecoveryController");
const getRecoveryController = new GetRecoveryController();

const DeleteRecoveryController = require("../modules/recovery/DeleteRecovery/DeleteRecoveryController");
const deleteRecoveryController = new DeleteRecoveryController();

loginRouters.post("/", getUserLoginController.handle);
loginRouters.post("/registrar", createUserController.handle);
loginRouters.post("/sendrecovery", sendRecoveryController.handle);
loginRouters.post("/getrecovery", getRecoveryController.handle);
loginRouters.delete("/deleterecovery/:email", deleteRecoveryController.handle);

module.exports = loginRouters;
