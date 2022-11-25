const { Router } = require("express");
const VerifyTokenController = require("../modules/users/VerifyToken/VerifyTokenController");
const verifyTokenRouters = Router();
const verifyTokenController = new VerifyTokenController();

verifyTokenRouters.post("/", verifyTokenController.handle);

module.exports = verifyTokenRouters;
