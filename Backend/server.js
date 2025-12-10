const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())



const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017'

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.use('/api/todo/', (req, res) => {
    res.send('Todo API is working')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

