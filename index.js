require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const appRequestRoutes = require('./controller/AppRequest')
const appAuthRoutes = require('./controller/AppAuth')
const app = express();

app.use(express.json())
app.use(cors())

const PORT = 3000

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongo connectd: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
app.use('/api/requestRoutes',appRequestRoutes);
app.use('/api/appAuthRoutes',appAuthRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests",PORT);
    })
})