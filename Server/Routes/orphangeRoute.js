// Routes/orphangeRoute.js

const express = require('express');
const router = express.Router();
const orphangeModel = require('../models/Orphange');
const multer = require('multer');
const path = require('path');
const donateCategoryModel=require('../models/DonationType');
const donationModel = require('../models/Donate');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'image') {
            cb(null, true);
        } else {
            cb(new Error('Unexpected field'));
        }
    }
});

router.post('/addorphange', upload.single('image'), async (req, res) => {
    try {
        const { name, location, phonenumber, description, volunteername, volunteeremail } = req.body;
        const image = req.file.filename;
        const orphange = await orphangeModel.create({ name, location, phonenumber, description, volunteername, volunteeremail, image });
        res.json(orphange);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.put('/updateorphange/:id', upload.single('image'), async (req, res) => {
    try {
        const { name, location, phonenumber, description,  volunteername, volunteeremail } = req.body;
        const image = req.file ? req.file.filename : null; // Check if a new image is uploaded
        const updatedOrphange = await orphangeModel.findByIdAndUpdate(
            req.params.id,
            { name, location, phonenumber, description,  volunteername, volunteeremail, image },
            { new: true } // Return the updated document
        );
        res.json(updatedOrphange);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route for deleting orphanage
router.delete('/deleteorphange/:id', async (req, res) => {
    try {
        await orphangeModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Orphanage deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/getorphangebyid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const getorphanage = await orphangeModel.findById(id);
        if (!getorphanage) {
          return res.status(404).json({ error: "Orphanage not found" });
        }
        res.json(getorphanage);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve orphanage by ID" });
      }
})

router.get('/getorphanage', async (req, res) => {
    try {
        const orphanages = await orphangeModel.find();
        res.status(200).json({ success: true, data: orphanages });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// get orphanagename
// router.get("/getorphanagenames", async (req, res) => {
//     try{
//         const orphangename=orphangeModel.find()
//         res.json(orphangename);
//         console.log(orphangename);
//     }catch(err){
//         console.log(err);
//     }
// })
router.get('/getorphanagenames', async (req, res) => {
    try {
        const orphanages = await orphangeModel.find({}, { name: 1, _id: 0 }); // Fetch only the 'name' field
        const orphanageNames = orphanages.map(orphanage => orphanage.name);
        res.json(orphanageNames);
    } catch (error) {
        console.error('Error fetching orphanage names:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// getdta for volunteer
router.get('/getvoldetails', async (req, res) => {
    try {
        const volunteer = await orphangeModel.findById(req.params.id); // Mongoose will automatically cast id to ObjectId
        res.json(volunteer);
    } catch (error) {
        console.error('Error fetching volunteer details:', error);
        res.status(500).json({ message: 'Error fetching volunteer details' });
    }
});

// detailview
router.get('/getDetail/:id',async(req,res)=>{
    try{
        const details= await  orphangeModel.findById(req.params.id);
        res.json(details);
        console.log(details);
    }
    catch(err){
        console.log(err);
    }
})

// donate category

router.post('/donatecategory', upload.single('image'), async (req, res) => {
    try {
        // Extract data from the request body
        const { donateCategory } = req.body;
        
        // Check if an image file is provided in the request
        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }

        // Get the filename of the uploaded image
        const image = req.file.filename;

        // Create a new donation category
        const donate = await donateCategoryModel.create({ donateCategory, image });
        
        // Send the created donation category in the response
        res.json(donate);
        console.log(donate);
    } catch (err) {
        // Handle errors
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/donate',async(req,res)=>{
    try{
        const  donates=await donateCategoryModel.find()
        res.json(donates)
        console.log(donates);
    }
    catch(err){
        console.log(err);
    }
})

router.get('/getdonateCategory',async(req,res)=>{
    try{
        const getdonateCategory=await donateCategoryModel.find()
        res.json(getdonateCategory);
        console.log(getdonateCategory);
    }
    catch(err){
        console.log(err);
    }
})

router.post('/donatebyuser', async (req, res) => {
    try {
        const { username, email, description, name, donateCategory, amount } = req.body;
        // Create a new donation document using the model
        const donatebyuser = await donationModel.create({ username, email, description, name, donateCategory, amount });
        // Send the created document as response
        res.json(donatebyuser);
        console.log(donatebyuser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' }); // Sending a proper error response
    }
});

router.get('/getDonateUser',async(req,res)=>{
    try{
        const donateduser=await donationModel.find()
        res.json(donateduser)
        console.log(donateduser);
    }
    catch(err){
        console.log(err);
    }
})
module.exports = router;

