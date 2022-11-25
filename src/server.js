require("express-async-errors");
const express = require("express");
const routers = require("./routes");
const AppError = require("./utils/AppError");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routers);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: error.statusCode,
      mensagem: error.mensagem,
    });
  }
  return response.status(500).json({
    status: 500,
    mensagem: "Erro interno no servidor!",
  });
});

app.listen("8080", () => console.log("Server is running"));
