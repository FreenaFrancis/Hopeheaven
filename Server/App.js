// server.js

const express = require('express');
const app = express();
const port = 7000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const orphanageRoute = require('./Routes/orphangeRoute');
const volunteerRoute=require('./Routes/volunteerRoute')
const userRouter=require('./Routes/userRouter')
// Connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/HopeHeaven')
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

// Multer setup for file uploads
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

// Routes
app.use('/api/orphange', orphanageRoute);
app.use('/api/volunteer',volunteerRoute)
app.use('/api/user',userRouter)
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
