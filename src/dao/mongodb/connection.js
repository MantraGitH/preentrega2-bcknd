import { connect } from "mongoose";

const MONGO_URL ="mongodb+srv://camiloarias56:camiloarias56@clusterprdm.as8xfkk.mongodb.net/ecommerce?retryWrites=true&w=majority";
export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log("Conectado a MongoDB");
  } catch {
    console.log("Error al conectar con mongo MongoDB");
  }
};