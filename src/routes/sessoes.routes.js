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
sessoesRouters.delete("/:id", deleteSessaoController.handle);
sessoesRouters.put("/:id", editSessaoController.handle);

//FIM SESSAO

//DADO

const CreateDadoController = require("../modules/sessoes/dado/CreateDado/CreateDadoController");
const createDadoController = new CreateDadoController();

const DeleteDadoController = require("../modules/sessoes/dado/DeleteDado/DeleteDadoController");
const deleteDadoController = new DeleteDadoController();

const GetDadoBySessaoIdController = require("../modules/sessoes/dado/GetDadoBySessaoId/GetDadoBySessaoIdController");
const getDadoBySessaoIdController = new GetDadoBySessaoIdController();

const EditDadoController = require("../modules/sessoes/dado/EditDado/EditDadoController");
const editDadoController = new EditDadoController();

sessoesRouters.delete("/dado/:id", deleteDadoController.handle);
sessoesRouters.post("/dado", createDadoController.handle);
sessoesRouters.get("/dado/:id", getDadoBySessaoIdController.handle)
sessoesRouters.put("/dado/:id", editDadoController.handle)

//FIM DADO

//PARTICIPANTE

const GetParticipanteBySessaoIdController = require("../modules/sessoes/participante/GetParticipanteBySessaoId/GetParticipanteBySessaoIdController");
const getParticipanteBySessaoIdController =
  new GetParticipanteBySessaoIdController();

sessoesRouters.get(
  "/participante/:id",
  getParticipanteBySessaoIdController.handle
);

//FIM PARTICIPANTE

//INICIATIVA

const CreateIniciativaController = require("../modules/sessoes/iniciativa/CreateIniciativa/CreateIniciativaController");
const createIniciativaController = new CreateIniciativaController();

const GetIniciativaBySessaoIdController = require("../modules/sessoes/iniciativa/GetIniciativaBySessaoId/GetIniciativaBySessaoIdController");
const getIniciativaBySessaoIdController = new GetIniciativaBySessaoIdController();

const DeleteIniciativaController = require("../modules/sessoes/iniciativa/DeleteIniciativa/DeleteIniciativaController");
const deleteIniciativaController = new DeleteIniciativaController();

const EditIniciativaController = require("../modules/sessoes/iniciativa/EditIniciativa/EditIniciativaController");
const editIniciativaController = new EditIniciativaController();

const EditIniciativaByPosicaoController = require("../modules/sessoes/iniciativa/EditIniciativaByPosicao/EditIniciativaByPosicaoController");
const editIniciativaByPosicaoController = new EditIniciativaByPosicaoController();

sessoesRouters.get("/iniciativa/:id", getIniciativaBySessaoIdController.handle);
sessoesRouters.post("/iniciativa", createIniciativaController.handle);
sessoesRouters.delete("/iniciativa/:id", deleteIniciativaController.handle);
sessoesRouters.put("/iniciativa/:id", editIniciativaController.handle)
sessoesRouters.put("/iniciativa/posicao/:id", editIniciativaByPosicaoController.handle)

//FIM INICIATIVA

//ANOTACAO

const CreateAnotacaoController = require("../modules/sessoes/anotacao/CreateAnotacao/CreateAnotacaoController");
const createAnotacaoController = new CreateAnotacaoController();

const GetAnotacaoController = require("../modules/sessoes/anotacao/GetAnotacao/GetAnotacaoController");
const getAnotacaoController = new GetAnotacaoController();

const DeleteAnotacaoController = require("../modules/sessoes/anotacao/DeleteAnotacao/DeleteAnotacaoController");
const deleteAnotacaoController = new DeleteAnotacaoController();

const EditAnotacaoController = require("../modules/sessoes/anotacao/EditAnotacao/EditAnotacaoController");
const editAnotacaoController = new EditAnotacaoController();

sessoesRouters.post("/anotacao", createAnotacaoController.handle);
sessoesRouters.get("/anotacao/:id", getAnotacaoController.handle)
sessoesRouters.delete("/anotacao/:id", deleteAnotacaoController.handle)
sessoesRouters.put("/anotacao/:id", editAnotacaoController.handle)

//FIM ANOTACAO

//ITEM

const CreateItemController = require("../modules/sessoes/item/CreateItem/CreateItemController");
const createItemController = new CreateItemController();

const GetItensController = require("../modules/sessoes/item/GetItens/GetItensController");
const getItensController = new GetItensController();

const DeleteItemController = require("../modules/sessoes/item/DeleteItem/DeleteItemController");
const deleteItemController = new DeleteItemController();

const EditItemController = require("../modules/sessoes/item/EditItem/EditItemController");
const editItemController = new EditItemController();


sessoesRouters.post("/item", createItemController.handle);
sessoesRouters.get("/item/:id", getItensController.handle)
sessoesRouters.delete("/item/:id", deleteItemController.handle)
sessoesRouters.put("/item/:id", editItemController.handle)

//FIM ITEM

//ARMA

const CreateArmaController = require("../modules/sessoes/arma/CreateArma/CreateArmaController");
const createArmaController = new CreateArmaController();

const GetArmasController = require("../modules/sessoes/arma/GetArmas/GetArmasController");
const getArmasController = new GetArmasController();

const DeleteArmaController = require("../modules/sessoes/arma/DeleteArma/DeleteArmaController");
const deleteArmaController = new DeleteArmaController();

const EditArmaController = require("../modules/sessoes/arma/EditArma/EditArmaController");
const editArmaController = new EditArmaController();

sessoesRouters.post("/arma", createArmaController.handle);
sessoesRouters.get("/arma/:id", getArmasController.handle)
sessoesRouters.delete("/arma/:id", deleteArmaController.handle)
sessoesRouters.put("/arma/:id", editArmaController.handle)

//FIM ARMA

//CONVITE


const CreateConviteController = require("../modules/sessoes/convite/CreateConvite/CreateConviteController");
const createConviteController = new CreateConviteController();

const GetConviteController = require("../modules/sessoes/convite/GetConviteByEmail/GetConviteController");
const getConviteController = new GetConviteController();

const GetConviteByIdController = require("../modules/sessoes/convite/GetConviteById/GetConviteByIdController");
const getConviteByIdController = new GetConviteByIdController();

const DeleteConviteController = require("../modules/sessoes/convite/DeleteConvite/DeleteConviteController");
const deleteConviteController = new DeleteConviteController();

sessoesRouters.post("/convite", createConviteController.handle);
sessoesRouters.get("/convite/:email", getConviteController.handle)
sessoesRouters.get("/convite/id/:id", getConviteByIdController.handle)
sessoesRouters.delete("/convite/:id", deleteConviteController.handle)

//FIM CONVITE

module.exports = sessoesRouters;
