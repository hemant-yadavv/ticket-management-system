const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: ["open", "closed", "pending"],
        default : "open"
    }
},{timestamps:true});


module.exports = mongoose.model('Ticket', ticketSchema);