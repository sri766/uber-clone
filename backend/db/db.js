const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


function connectionToDb(){
        mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('Database connected'))
        .catch(err => console.log(err));
    
}

module.exports = connectionToDb;