import { messageModel } from "./models/messageModel.js";

export default class MessageManager {
  async create(obj) {
    try {
      const response = await messageModel.create(obj);
      return response;
    } catch (error) {
      throw new Error("el mensaje no pudo ser enviado" + error.message);
    }
  }

  async getAll() {
    try {
      const response = await messageModel.find();
      return response;
    } catch (error) {
      throw new Error("Error al obtener los mensajes");
    }
  }
}