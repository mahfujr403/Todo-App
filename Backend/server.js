import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import {todoRouter} from './routes/todoRoutes.js'
// import Todo from './models/todoModel.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/todo', todoRouter)

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todoapp'




mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

