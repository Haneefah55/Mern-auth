import mongoose from 'mongoose'
import dotenv from 'dotenv'
import multer from "multer"

dotenv.config()
const mongoUri = process.env.MONGO_URI

export const connectDB = async () =>{
  try{
    const conn = await mongoose.connect(mongoUri)
    console.log(`Mongodb connected. ${conn.connection.host}`)
  }catch(error){
    console.log("error connecting to mongodb.",  error.message)
    process.exit(1)
  }
}





