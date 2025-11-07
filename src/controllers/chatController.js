import { Message } from "../models/Message.js";

// Obtener todos los mensajes
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener mensajes", error });
  }
};