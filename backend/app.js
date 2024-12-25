const dotenv = require('dotenv');
dotenv.config();

//route
const userRoute = require('./routes/user.routes');

//express
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//db
const connectionToDb = require('./db/db');
connectionToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoute);

module.exports = app;
