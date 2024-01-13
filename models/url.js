const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },

    //original url
    redirectURL: {
        type: String,
        required: true,
    },
    
    //array inside visitstamp

    visitHistory: [{ timestamp: { type: Number } }],

}, { timestamps: true }

);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;