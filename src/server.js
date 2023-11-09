require("express-async-errors");
const express = require("express");
const routers = require("./routes");
const AppError = require("./utils/AppError");
const cors = require("cors");
require("dotenv").config();
const { createProxyMiddleware } = require('http-proxy-middleware');

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routers);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: error.statusCode,
      msg: error.msg
    });
  }
  return response.status(500).json({
    status: 500,
    msg: "Erro interno no servidor!"
  });
});

const options = {
  cors: true,
  origin: ["*"]
};

const httpServer = createServer(app);

const io = new Server(httpServer, options);

io.on("connection", (socket) => {
  // console.log('Connection => Alguém Conectou.')
  socket.on(`status.combate`, (data) => {
    io.emit(`status.combate`, data);
  });
  socket.on(`status.insano`, (data) => {
    io.emit(`status.insano`, data);
  });
  socket.on(`status.massivo`, (data) => {
    io.emit(`status.massivo`, data);
  });
  socket.on(`status.inconsciente`, (data) => {
    io.emit(`status.inconsciente`, data);
  });
  socket.on(`status.pvA`, (data) => {
    io.emit(`status.pvA`, data);
  });
  socket.on(`status.sanA`, (data) => {
    io.emit(`status.sanA`, data);
  });
  socket.on(`status.peA`, (data) => {
    io.emit(`status.peA`, data);
  });
  socket.on(`status.pvMax`, (data) => {
    io.emit(`status.pvMax`, data);
  });
  socket.on(`status.sanMax`, (data) => {
    io.emit(`status.sanMax`, data);
  });
  socket.on(`status.peMax`, (data) => {
    io.emit(`status.peMax`, data);
  });
  socket.on(`status.portrait`, (data) => {
    io.emit(`status.portrait`, data);
  });
  socket.on(`status.municao`, (data) => {
    io.emit(`status.municao`, data);
  });
  socket.on(`enviado.convite`, (data) => {
    io.emit(`enviado.convite`, data);
  });
  socket.on(`enviado.inv`, (data) => {
    io.emit(`enviado.inv`, data);
  });
  socket.on(`enviado.itemImg`, (data) => {
    if (data.fichaId != null) {
      io.emit(`enviado.itemImg`, data);
    }

    if (data.sessaoId != null) {
      io.emit(`enviado.itemImg`, data);
    }
  });
  socket.on(`dado.rolado`, (data) => {
    io.emit(`dado.rolado`, data);
    io.emit(`dado.rolado`, data);
  });
  // socket.on('disconnect', () => {
  //   console.log('Disconnect => Alguém desconectou.')
  // })
});

httpServer.listen(process.env.PORT || "8080", () =>
  console.log("Server is running")
);
