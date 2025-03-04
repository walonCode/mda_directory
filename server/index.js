import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import mdaRouter from './routes/mdaRoute.js'
import connectDB from './configs/connectDB.js'
import { corsOptions } from './configs/corsOptions.js'
import { insertData } from './controllers/mdaController.js'

const app = express()

//making .env work in nodejs
config()

//connection to the database
connectDB()

// await insertData()

//common middleware
app.use(express.json())
app.use(cors(corsOptions))

//routes
app.use('/api/v1/mda/',mdaRouter)

//app listening to a port
app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})