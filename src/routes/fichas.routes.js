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

//DADO

const CreateDadoController = require("../modules/fichas/dado/CreateDado/CreateDadoController");
const createDadoController = new CreateDadoController();

const DeleteDadoController = require("../modules/fichas/dado/DeleteDado/DeleteDadoController");
const deleteDadoController = new DeleteDadoController();

const GetDadoBySessaoIdController = require("../modules/fichas/dado/GetDadoBySessaoId/GetDadoBySessaoIdController");
const getDadoBySessaoIdController = new GetDadoBySessaoIdController();

const EditDadoController = require("../modules/fichas/dado/EditDado/EditDadoController");
const editDadoController = new EditDadoController();

fichasRouters.delete("/dado/:id", deleteDadoController.handle);
fichasRouters.post("/dado", createDadoController.handle);
fichasRouters.get("/dado/:id", getDadoBySessaoIdController.handle);
fichasRouters.put("/dado/:id", editDadoController.handle);

//FIM DADOss

//ITEM

const CreateItemController = require("../modules/fichas/item/CreateItem/CreateItemController");
const createItemController = new CreateItemController();

const EnviarItemController = require("../modules/fichas/item/EnviarItem/EnviarItemController");
const enviarItemController = new EnviarItemController();

const GetItensController = require("../modules/fichas/item/GetItens/GetItensController");
const getItensController = new GetItensController();

const DeleteItemController = require("../modules/fichas/item/DeleteItem/DeleteItemController");
const deleteItemController = new DeleteItemController();

const EditItemController = require("../modules/fichas/item/EditItem/EditItemController");
const editItemController = new EditItemController();

fichasRouters.post("/item", createItemController.handle);
fichasRouters.post("/item/enviar", enviarItemController.handle);
fichasRouters.get("/item/:id", getItensController.handle);
fichasRouters.delete("/item/:id", deleteItemController.handle);
fichasRouters.put("/item/:id", editItemController.handle);

//FIM ITEM

//ARMA

const CreateArmaController = require("../modules/fichas/arma/CreateArma/CreateArmaController");
const createArmaController = new CreateArmaController();

const EnviarArmaController = require("../modules/fichas/arma/EnviarArma/EnviarArmaController");
const enviarArmaController = new EnviarArmaController();

const GetArmasController = require("../modules/fichas/arma/GetArmas/GetArmasController");
const getArmasController = new GetArmasController();

const DeleteArmaController = require("../modules/fichas/arma/DeleteArma/DeleteArmaController");
const deleteArmaController = new DeleteArmaController();

const EditArmaController = require("../modules/fichas/arma/EditArma/EditArmaController");
const editArmaController = new EditArmaController();

fichasRouters.post("/arma", createArmaController.handle);
fichasRouters.post("/arma/enviar", enviarArmaController.handle);
fichasRouters.get("/arma/:id", getArmasController.handle);
fichasRouters.delete("/arma/:id", deleteArmaController.handle);
fichasRouters.put("/arma/:id", editArmaController.handle);

//FIM ARMA

//PORTRAIT

const EditPortraitController = require("../modules/fichas/portrait/EditPortrait/EditPortraitController");
const editPortraitController = new EditPortraitController();

fichasRouters.put("/portrait/:id", editPortraitController.handle);

//FIM PORTRAIT

//STATUS

const EditStatusController = require("../modules/fichas/status/EditStatus/EditStatusController");
const editStatusController = new EditStatusController();

fichasRouters.put("/status/:id", editStatusController.handle);

//FIM STATUS

module.exports = fichasRouters;
