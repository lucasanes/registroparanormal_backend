require("express-async-errors");
const express = require("express");
const routers = require("./routes");
const AppError = require("./utils/AppError");
const cors = require("cors");
require("dotenv").config();
const { createProxyMiddleware } = require("http-proxy-middleware");

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
      msg: error.msg,
    });
  }
  return response.status(500).json({
    status: 500,
    msg: "Erro interno no servidor!",
  });
});

const options = {
  cors: true,
  origin: ["*"],
};

const httpServer = createServer(app);

const io = new Server(httpServer, options);

let screenSharer = null;
let webcamSharer = null;

const connections = {};

io.on("connection", (socket) => {
  socket.on(`status.combate`, (data) => {
    io.emit(`status.combate?${data.fichaId}`, data);
  });
  socket.on(`status.insano`, (data) => {
    io.emit(`status.insano?${data.fichaId}`, data);
  });
  socket.on(`status.massivo`, (data) => {
    io.emit(`status.massivo?${data.fichaId}`, data);
  });
  socket.on(`status.inconsciente`, (data) => {
    io.emit(`status.inconsciente?${data.fichaId}`, data);
  });
  socket.on(`status.pvA`, (data) => {
    io.emit(`status.pvA?${data.fichaId}`, data);
  });
  socket.on(`status.sanA`, (data) => {
    io.emit(`status.sanA?${data.fichaId}`, data);
  });
  socket.on(`status.peA`, (data) => {
    io.emit(`status.peA?${data.fichaId}`, data);
  });
  socket.on(`status.pvMax`, (data) => {
    io.emit(`status.pvMax?${data.fichaId}`, data);
  });
  socket.on(`status.sanMax`, (data) => {
    io.emit(`status.sanMax?${data.fichaId}`, data);
  });
  socket.on(`status.peMax`, (data) => {
    io.emit(`status.peMax?${data.fichaId}`, data);
  });
  socket.on(`status.portrait`, (data) => {
    io.emit(`status.portrait?${data.fichaId}`, data);
  });
  socket.on(`status.municao`, (data) => {
    io.emit(`status.municao?${data.fichaId}`, data);
  });
  socket.on(`enviado.convite`, (data) => {
    io.emit(`enviado.convite?${data}`, data);
  });
  socket.on(`enviado.inv`, (data) => {
    io.emit(`enviado.inv?${data.fichaId}`, data);
  });
  socket.on(`enviado.itemImg`, (data) => {
    if (data.fichaId != null) {
      io.emit(`enviado.itemImg?${data.fichaId}`, data);
    }

    if (data.sessaoId != null) {
      io.emit(`enviado.itemImg?${data.sessaoId}`, data);
    }
  });
  socket.on(`dado.rolado`, (data) => {
    io.emit(`dado.rolado`, data);
    io.emit(`dado.rolado?${data.fichaId}`, data);
  });

  // Screen Share

  socket.on("streaming/offer", (offer, targetId) => {
    if (targetId) {
      io.to(targetId).emit("streaming/offer", offer, socket.id);
    } else {
      socket.broadcast.emit("streaming/offer", offer, socket.id);
    }
  });

  socket.on("streaming/answer", (answer, targetId) => {
    if (targetId) {
      io.to(targetId).emit("streaming/answer", answer, socket.id);
    } else {
      socket.broadcast.emit("streaming/answer", answer, socket.id);
    }
  });

  socket.on("streaming/ice-candidate", (candidate, targetId) => {
    if (targetId) {
      io.to(targetId).emit("streaming/ice-candidate", candidate, socket.id);
    } else {
      socket.broadcast.emit("streaming/ice-candidate", candidate, socket.id);
    }
  });

  socket.on("streaming/new-user-joined", () => {
    console.log("Novo usuário entrou:", socket.id);

    if (screenSharer) {
      io.to(screenSharer).emit("streaming/request-share", socket.id);
    }
  });

  socket.on("streaming/start-share", () => {
    screenSharer = socket.id;
    console.log("Usuário começou a compartilhar a tela:", socket.id);
  });

  socket.on("streaming/stop-share", () => {
    console.log("Usuário parou de compartilhar a tela:", socket.id);

    screenSharer = null;

    socket.broadcast.emit("streaming/stop-share");
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado:", socket.id);

    if (screenSharer === socket.id) {
      screenSharer = null;
      socket.broadcast.emit("streaming/stop-share");
    }
  });

  // Webcam Share

  socket.on("webcam/offer", (offer, targetId) => {
    if (targetId) {
      io.to(targetId).emit("webcam/offer", offer);
    } else {
      socket.broadcast.emit("webcam/offer", offer);
    }
  });
  socket.on("webcam/answer", (answer, sharerId) => {
    if (sharerId) {
      io.to(sharerId).emit("webcam/answer", answer);
    } else {
      socket.broadcast.emit("webcam/answer", answer);
    }
  });
  socket.on("webcam/ice-candidate", (candidate, targetId) => {
    if (targetId) {
      io.to(targetId).emit("webcam/ice-candidate", candidate);
    } else {
      socket.broadcast.emit("webcam/ice-candidate", candidate);
    }
  });
  socket.on("webcam/new-user-joined", () => {
    console.log("Novo usuário entrou:", socket.id);

    if (screenSharer) {
      io.to(screenSharer).emit("webcam/request-share", socket.id);
    }
  });
  socket.on("webcam/start-share", () => {
    screenSharer = socket.id;
    console.log("Usuário começou a compartilhar a tela:", socket.id);
  });
  socket.on("webcam/stop-share", () => {
    console.log("Usuário parou de compartilhar a tela:", socket.id);

    screenSharer = null;

    socket.broadcast.emit("webcam/stop-share");
  });

  //Disconnect

  socket.on("disconnect", () => {
    if (socket.id === screenSharer) {
      screenSharer = null;
      console.log("Screen sharer desconectado");
    }

    if (socket.id === webcamSharer) {
      webcamSharer = null;
      console.log("Webcam sharer desconectado");
    }
  });
});

httpServer.listen(process.env.PORT || "8080", () =>
  console.log("Server is running")
);
