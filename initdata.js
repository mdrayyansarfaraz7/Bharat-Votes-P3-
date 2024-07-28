const express = require('express');
const mongoose = require('mongoose');
const app = express();
const StatesAndParty = require('./models/StateAndParties');


// Import ObjectId from mongoose
const ObjectId = mongoose.Types.ObjectId;

app.get('/init', async (req, res) => {
    try {
       
       const result=await StatesAndParty.find({});
        res.send(result);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Connect to MongoDB and start the server
mongoose.connect('mongodb://localhost:27017/RemoteVoting', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB Connected!');
        app.listen(8080, () => {
            console.log('Server is running on port 8080');
        });
    })
    .catch(err => {
        console.error('DB connection error:', err);
    });
