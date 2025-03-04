import mongoose from "mongoose";

export default async function connectDB(){
    try{
        await mongoose.connect(process.env.DATABASE_URI,{})
        console,log('connected to MongoDB')
    }catch(error){
        console.error('error occurred during connection to mongodb',error)
        setTimeout(() =>{
            connectDB()
        },5000)
    }
}