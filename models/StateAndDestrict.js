const mongoose=require('mongoose');

const stateAndDistrictSchema = new mongoose.Schema({
    state: { type: String, required: true },
    districts: [
      {
        name: { type: String, required: true },
        noOfVoters: { type: Number, default: 0 }
      }
    ]
  });
  
  const StateAndDistrict = mongoose.model('StateAndDistrict', stateAndDistrictSchema);
  module.exports = StateAndDistrict;