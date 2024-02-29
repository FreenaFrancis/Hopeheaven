const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../models/User');
const  orphangeModel=require('../models/Orphange')
const router = express.Router();
const VolunteerModel=require('../models/Volunteer')
// Make sure to require 'bcrypt' for password hashing
const giveRequestModel=require('../models/GiveRequest')
const feedbackModel=require('../models/Givefeedback')
router.post('/addvolunteer', async (req, res) => {
    try {
        const { name, volunteername, volunteeremail, password } = req.body;
        const volunteer = await VolunteerModel.create({ name, volunteername, volunteeremail, password });
        res.status(201).json(volunteer); // Respond with status 201 for successful creation
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/getvolunteer',async(req,res)=>{
    try{
        const getvolunteer= await VolunteerModel.find()
        res.json(getvolunteer);
        console.log(getvolunteer);
    }
    catch(err){
        console.log(err);
    }
})

router.post('/giverequests', async (req, res) => {
    try {
        const { name, volunteername, volunteeremail, purpose, description } = req.body;
        const newGiveRequest = new giveRequestModel({ name, volunteername, volunteeremail, purpose, description });
        const savedGiveRequest = await newGiveRequest.save();
        res.status(201).json(savedGiveRequest);
    } catch (error) {
        console.error('Error creating GiveRequest:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getrequest', async (req, res) => {
    try {
        const giveRequests = await giveRequestModel.find();
        res.status(200).json(giveRequests);
    } catch (error) {
        console.error('Error retrieving GiveRequests:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// router.get('/getvolunteerbyid/:id', async (req, res) => {
//     try {
//         const volunteer = await VolunteerModel.findById(req.params.id);
//         if (!volunteer) {
//             return res.status(404).json({ error: 'Volunteer not found' });
//         }
//         res.status(200).json(volunteer);
//     } catch (error) {
//         console.error('Error retrieving volunteer:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// feedback

router.post('/givefeedback',async(req,res)=>{
    try{
        const {name,email,feedback}=req.body;
        const givefeedback=await feedbackModel.create({name:name,email:email,feedback:feedback})
        res.json(givefeedback)
        console.log(givefeedback);
    }
    catch(err){
        console.log(err);
    }
})


router.get('/receivefeedback', async (req, res) => {
    try {
        const receivefeedback = await feedbackModel.find();
        res.json(receivefeedback);
        console.log(receivefeedback);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
