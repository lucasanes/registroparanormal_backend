const { Router } = require("express");
const usersRouters = require("./users.routes");
const loginRouters = require("./login.routes");
const tokenRouters = require("./token.routes");
const sessoesRouters = require("./sessoes.routes");
const fichasRouters = require("./fichas.routes");
const { user } = require("../modules/database/prisma");
const routers = Router();

routers.use("/login", loginRouters);
routers.use("/usuarios", usersRouters);
routers.use("/token", tokenRouters);
routers.use("/sessoes", sessoesRouters);
routers.use("/fichas", fichasRouters);
routers.post("/", (request, response) => {
  const { user, password } = request.body;

  response.json({
    user,
    password
  });
});
module.exports = routers;
