const { Router } = require("express");
const CreateUserController = require("../modules/users/CreateUser/CreateUserController");
const createUserController = new CreateUserController();
const GetUserController = require("../modules/users/GetUser/GetUserController");
const EditUserController = require("../modules/users/EditUser/EditUserController");
const GetUserByIdController = require("../modules/users/GetUserById/GetUserByIdController");
const DeleteUserController = require("../modules/users/DeleteUser/DeleteUserController");
const usersRouters = Router();
const getUserController = new GetUserController();
const getUserByIdController = new GetUserByIdController();
const editUserController = new EditUserController();
const deleteUserController = new DeleteUserController();

usersRouters.post("/", createUserController.handle);
usersRouters.get("/", getUserController.handle);
usersRouters.get("/:id", getUserByIdController.handle)
usersRouters.put("/:id", editUserController.handle);
usersRouters.delete("/:id", deleteUserController.handle)

//Vinha é gay

module.exports = usersRouters;