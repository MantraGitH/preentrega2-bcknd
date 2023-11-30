import { connect } from "mongoose";

const MONGO_URL ="mongodb://localhost:27017/";
export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log("Conectado a MongoDB");
  } catch {
    console.log("Error al conectar con mongo MongoDB");
  }
};