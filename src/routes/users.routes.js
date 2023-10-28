const { Router } = require("express");
const CreateUserController = require("../modules/users/CreateUser/CreateUserController");
const createUserController = new CreateUserController();
const GetUserController = require("../modules/users/GetUser/GetUserController");
const EditUserController = require("../modules/users/EditUser/EditUserController");
const EditPassUserController = require("../modules/users/EditPassUser/EditPassUserController");
const GetUserByIdController = require("../modules/users/GetUserById/GetUserByIdController");
const DeleteUserController = require("../modules/users/DeleteUser/DeleteUserController");
const GetDashboardController = require("../modules/users/GetDashboard/GetDashboardController");
const usersRouters = Router();
const getUserController = new GetUserController();
const getUserByIdController = new GetUserByIdController();
const editUserController = new EditUserController();
const editPassUserController = new EditPassUserController();
const deleteUserController = new DeleteUserController();
const getDashboardController = new GetDashboardController()

usersRouters.post("/", createUserController.handle);
usersRouters.get("/", getUserController.handle);
usersRouters.get("/dashboard/:id", getDashboardController.handle);
usersRouters.get("/:id", getUserByIdController.handle)
usersRouters.put("/:id", editUserController.handle);
usersRouters.put("/pass/:id", editPassUserController.handle);
usersRouters.delete("/:id", deleteUserController.handle)

//Vinha é gay

module.exports = usersRouters;