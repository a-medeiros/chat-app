const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const { addUserToARoom, getCurrentUser, removeUser } = require("./utils/users");

const app = express();
const server = http.createServer(app);
corsOptions = {
  cors: true,
  origins: ["http://localhost:3000"],
};
const io = socketio(server, corsOptions);

const botName = "ChatBot";

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = addUserToARoom(socket.id, username, room);

    socket.join(user.room);

    socket.emit("message", formatMessage(botName, `Bem vindo, ${username}.`));

    socket.broadcast
      .to(user.room)
      .emit("message", formatMessage(botName, `${username} entrou na sala.`));
  });

  socket.on("message", (message) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", message);
  });

  socket.on("disconnect", () => {
    const removedUser = removeUser(socket.id);
    io.to(removedUser.room).emit(
      "message",
      formatMessage(botName, `${removedUser.username} saiu da sala`)
    );
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
