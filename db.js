//responsible for establishing a connection between Node.js application and MongoDB database using Mongoose library
const mongoose = require('mongoose');

//Define MongoDB connection URL
const mongoURL = "mongodb://localhost:27017/hotels"

//setup MongoDB Connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default connection
//mongoose maintain a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Define eventListeners for database connection
db.on('connected', ()=>{
    console.log("connected to MongoDB server");
});

db.on('error',(err)=>{
    console.log('MongoDB connection failed', err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//export the DB connection
module.exports = {db};