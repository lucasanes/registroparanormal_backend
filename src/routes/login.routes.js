const { Router } = require("express");
const GetUserLoginController = require("../modules/users/GetUserLogin/GetUserLoginController");
const loginRouters = Router();
const getUserLoginController = new GetUserLoginController();

loginRouters.post("/", getUserLoginController.handle);

module.exports = loginRouters;
