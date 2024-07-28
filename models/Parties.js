const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  party: {
    type: String,
    required: true
  },
  URL: {
    type: String,
    required: true
  }
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;
