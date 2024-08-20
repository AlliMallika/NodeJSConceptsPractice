const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


router.get('/', async(req, res)=>{
    try {
        const persons = await Person.find();
        if(!persons.length)
        {
            console.log('No Persons found');
            res.status(404).json({message:'No Person found'});
        }
        console.log('All Persons from database');
        res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        res.status(500).json(persons);
    }
})
router.post('/', async (req, res)=>{
    try {
        const data = req.body; // assuming the request body contains Person data

         //create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        //save newPerson to database
        const response = await newPerson.save();
        console.log('Person data is saved in database successfully');
        res.status(200).json(response);   
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})
router.put('/:id', async (req, res)=>{
    try {
       const personId = req.params.id;
       const updatedPerson = req.body;
       const result = await Person.findByIdAndUpdate(personId, updatedPerson,{
        new: true, // return the updated document
        runValidators:true // run Mongoose validation
       });
       if(!result)
       {
        console.log('No person found with Id');
        return res.status(404).json({ message: 'No Person found to update'});
       }
       console.log('Existing Person is updated');
       res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const personId = req.params.id;
        const result = await Person.findByIdAndDelete(personId);
        if(!result)
        {
            console.log('Person not found to delete');
            return res.status(404).json({message:'No Person found with id to delete'});
        }
        console.log('Existing Person is deleted from database');
        res.status(200).json({result});

    } catch (error) {
        console.log('No Person found to delete');
        res.status(500).json({error:'Internal Server error'});
    }
})

module.exports = router;