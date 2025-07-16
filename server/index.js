const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
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
app.listen(port , () => {
  console.log(`Server is running on port ${port}`);
});