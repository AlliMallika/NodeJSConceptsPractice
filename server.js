const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json())//req.body

const Person = require('./models/Person');
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);




// app.post('/person',(req, res)=>{
//     const data = req.body; // assuming the request body contains Person data

//     //create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//    //save newPerson to database
//    newPerson.save((error, savedPerson)=>{
//     if(error)
//     {
//        console.log('Error in saving Person data', error);
//        res.status(500).json('Internal Server Error');
//     }
//     else{
//         console.log('Person data saved successfully in database');
//         res.status(201).json(savedPerson);
//     }
//    })

// })




app.get('/', (req, res)=>{
    res.send("Welcome to my Hotel! How may i help you? We have a list of menus");
})

app.get('/idli', (req, res)=>{
    var responseInJSONForm = {
        "is_Sambar": true,
        "is_Chutney":false,
        "idliSize":"5cm Diameter"
    };
    res.send(responseInJSONForm);
    console.log("You ordered Idli");
    // res.send("would you like to order idli?");
})

app.listen(5001, ()=>{
    console.log("server is running on port 5001");
})