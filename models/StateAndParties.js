const mongoose = require('mongoose');

const statesAndPartySchema = new mongoose.Schema({
    state: { type: String, required: true },
    parties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Party' }]
});


const StatesAndParty = mongoose.model('StatesAndParty', statesAndPartySchema);

module.exports = StatesAndParty;
