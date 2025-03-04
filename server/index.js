import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import mdaRouter from './routes/mdaRoute.js'
import connectDB from './configs/connectDB.js'
import { corsOptions } from './configs/corsOptions.js'

const app = express()

//connection to the database
// connectDB()

//making .env work in nodejs
config()

//common middleware
app.use(express.json())
app.use(cors(corsOptions))

//routes
app.use('/api/v1/mda/',mdaRouter)

//app listening to a port
app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})