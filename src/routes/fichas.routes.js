const { Router } = require("express");
const fichasRouters = Router();

//Ficha

const CreateFichaController = require("../modules/fichas/ficha/CreateFicha/CreateFichaController");
const createFichaController = new CreateFichaController();

const GetFichaBySessaoIdController = require("../modules/fichas/ficha/GetFichaBySessaoId/GetFichaBySessaoIdController");
const getFichaControllerBySessaoId = new GetFichaBySessaoIdController();

const GetFichaByUserIdController = require("../modules/fichas/ficha/GetFichaByUserId/GetFichaByUserIdController");
const getFichaControllerByUserId = new GetFichaByUserIdController();

const GetFichaByIdController = require("../modules/fichas/ficha/GetFichaById/GetFichaByIdController");
const getFichaByIdController = new GetFichaByIdController();

const DeleteFichaController = require("../modules/fichas/ficha/DeleteFicha/DeleteFichaController");
const deleteFichaController = new DeleteFichaController();

fichasRouters.post("/", createFichaController.handle);
fichasRouters.get("/sessao/:id", getFichaControllerBySessaoId.handle);
fichasRouters.get("/user/:id", getFichaControllerByUserId.handle);
fichasRouters.get("/:id", getFichaByIdController.handle);
fichasRouters.delete("/:id", deleteFichaController.handle);

//Fim Ficha

//Dado

const CreateDadoController = require("../modules/fichas/dado/CreateDado/CreateDadoController");
const createDadoController = new CreateDadoController();

const DeleteDadoController = require("../modules/fichas/dado/DeleteDado/DeleteDadoController");
const deleteDadoController = new DeleteDadoController();

fichasRouters.delete("/dado/:id", deleteDadoController.handle)
fichasRouters.post("/dado", createDadoController.handle)

//Fim dado

module.exports = fichasRouters;
