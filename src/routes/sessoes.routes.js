const { Router } = require("express");
const sessoesRouters = Router();

//SESSAO

const CreateSessaoController = require("../modules/sessoes/sessao/CreateSessao/CreateSessaoController");
const createSessaoController = new CreateSessaoController();

const GetSessaoController = require("../modules/sessoes/sessao/GetSessao/GetSessaoController");
const getSessaoController = new GetSessaoController();

const GetSessaoByIdController = require("../modules/sessoes/sessao/GetSessaoById/GetSessaoByIdController");
const getSessaoByIdController = new GetSessaoByIdController();

const DeleteSessaoController = require("../modules/sessoes/sessao/DeleteSessao/DeleteSessaoController");
const deleteSessaoController = new DeleteSessaoController();

const EditSessaoController = require("../modules/sessoes/sessao/EditSessao/EditSessaoController");
const editSessaoController = new EditSessaoController();

const GetSessaoByUserIdController = require("../modules/sessoes/sessao/GetSessaoByUserId/GetSessaoByUserIdController");
const getSessaoByUserIdController = new GetSessaoByUserIdController();

sessoesRouters.post("/", createSessaoController.handle);
sessoesRouters.get("/", getSessaoController.handle);
sessoesRouters.get("/:id", getSessaoByIdController.handle);
sessoesRouters.get("/userid/:id", getSessaoByUserIdController.handle);
sessoesRouters.delete("/:id", deleteSessaoController.handle)
sessoesRouters.put("/:id", editSessaoController.handle)

//FIM SESSAO

//DADO

const CreateDadoController = require("../modules/sessoes/dado/CreateDado/CreateDadoController");
const createDadoController = new CreateDadoController();

const DeleteDadoController = require("../modules/sessoes/dado/DeleteDado/DeleteDadoController");
const deleteDadoController = new DeleteDadoController();

sessoesRouters.delete("/dado/:id", deleteDadoController.handle)
sessoesRouters.post("/dado", createDadoController.handle)

//FIM DADO

//PARTICIPANTE

const GetParticipanteBySessaoIdController = require("../modules/sessoes/participante/GetParticipanteBySessaoId/GetParticipanteBySessaoIdController")
const getParticipanteBySessaoIdController = new GetParticipanteBySessaoIdController()

sessoesRouters.get("/participante/:id", getParticipanteBySessaoIdController.handle)

//FIM PARTICIPANTE

module.exports = sessoesRouters;
