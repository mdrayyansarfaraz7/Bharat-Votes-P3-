const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    voterName: { 
        type: String,
        required: true 
    },
    dob: { 
        type: Date, 
        required: true 
    },
    gender: { 
        type: String,
        required: true 
    },
    homeState: {      
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StateAndDistrict', 
        required: true
    },
    homeDistrict: { 
        type: String,
        required: true 
    },
    currentState: { 
        type: String,
        required: true 
    },
    currentCountry: { 
        type: String,
        required: true 
    },
    aadharNumber: { 
        type: String,
        required: true,
        unique: true 
    },
    voterId: { 
        type: String,
        required: true, 
        unique: true 
    },
    email: { 
        type: String,
    },
    contactNumber: { 
        type: String,
        required: true 
    },
    vote: {
      iv: { type: String },
      voteTo: { type: String } 
    },
    token: {
      value: { type: String },
      status: { type: String, enum: ['active', 'destroyed'], default: 'active' }
    }
});

const Voter = mongoose.model('Voter', voterSchema);
module.exports = Voter;
