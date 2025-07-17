import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const port=process.env.PORT
const DB= async()=> {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Db connected successfully');
  }catch(error){
    console.log("error connecting to db",error);
  }
}
DB();
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);
app.listen(port , () => {
  console.log(`Server is running on port ${port}`);
});