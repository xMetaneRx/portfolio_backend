const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const informationSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
    },
    linkedin: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    }
}, {timestamps: true});

const Information = mongoose.model('Information', informationSchema);

module.exports = Information;