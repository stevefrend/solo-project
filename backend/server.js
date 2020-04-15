const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

// * MONGO CONNECTION ESTABLISHED WITH MONGOOSE
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established successfully")
})



//? ------- WRITE YOUR SERVER CODE HERE -------

// Routers
const dogRouter = require('./routes/router');

app.use('/', dogRouter)










//? ------- -----------------------------------
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})