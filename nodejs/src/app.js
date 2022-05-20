import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'

import productRoute from './routes/product'
import categoryRoute from './routes/category'
import userRoute from './routes/user'

const app = express()

//middleware
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

//connecting
mongoose.connect("mongodb://localhost:27017/zzz")
        .then(() => { console.log("Connect successfully" )})


//routing
app.use("/api", productRoute)
app.use("/api", categoryRoute)
app.use("/api", userRoute)

//port
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
})