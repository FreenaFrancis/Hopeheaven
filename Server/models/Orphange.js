const mongoose = require('mongoose');

const orphangeSchema = mongoose.Schema({
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    phonenumber: {
        type: Number
    },
    description: {
        type: String
    },
    volunteername: { // Corrected field name
        type: String
    },
    volunteeremail: {
        type: String
    },
    image: {
        type: String
    }
});

const orphangeModel = mongoose.model("orphange", orphangeSchema);
module.exports = orphangeModel;
