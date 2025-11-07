import { Message } from "../models/Message.js";

export const setupChatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("Usuario conectado:", socket.id);

    // Escuchar mensajes nuevos
    socket.on("newMessage", async (data) => {
      const { username, content } = data;
      if (!username || !content) return;

      // Guardar en MongoDB
      const message = new Message({ username, content });
      await message.save();

      // Emitir el mensaje a todos los clientes
      io.emit("messageBroadcast", message);
    });

    socket.on("disconnect", () => {
      console.log("Usuario desconectado:", socket.id);
    });
  });
};