import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Esto carga las variables del archivo .env

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('Conectado a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos.', error);
    process.exit(1); // Detiene la aplicación si no puede conectarse
  }
};