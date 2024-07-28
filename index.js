const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors'); // Include CORS for development if needed
const StateAndDistrict = require('./models/StateAndDestrict');
const Voter = require('./models/Voters');
const Party = require('./models/Parties');
const StatesAndParty = require('./models/StateAndParties');
const crypto = require('crypto');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Database connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/RemoteVoting');
}

main().then(() => console.log("DB Connected!")).catch(err => console.log("DB Connection Error:", err));

const port = 8080;

// States route
app.get('/states', async (req, res) => {
    try {
        let India = await StateAndDistrict.find({});
        console.log(India);
        res.json(India);
    } catch (error) {
        console.error('Error fetching states:', error);
        res.status(500).send('Internal server error');
    }
});


function decrypt(encryptedText, key, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

app.get('/votes/:state/:district', async (req, res) => {
    const { state, district } = req.params;
    console.log(`Fetching voters for state: ${state}, district: ${district}`);

    try {
        const allDistVoters = await Voter.find({ homeDistrict: district });
        let allParties = await StatesAndParty.aggregate([
            { $match: { state: state } },
            {
                $lookup: {
                    from: 'parties',
                    localField: 'parties',
                    foreignField: '_id',
                    as: 'partyDetails'
                }
            },
            {
                $project: {
                    _id: 0,
                    state: 1,
                    'partyDetails.party': 1, // Include the party name
                    'partyDetails.URL': 1 // Include the party URL
                }
            }
        ]);

        const partyVotes = allParties[0].partyDetails.map(party => ({
            name: party.party,
            URL: party.URL,
            votes: 0
        }));

        const algorithm = 'aes-256-cbc';

        allDistVoters.forEach((voter) => {
            const plainVoter = voter.toObject(); // Convert to plain object
            const vote = plainVoter.vote;

            console.log('Plain Voter vote object:', vote);
            console.log('IV:', vote.iv);
            console.log('VoteTo:', vote.voteTo);
            console.log('Key:', vote.key);

            if (vote.key) {
                try {
                    const decryptedVote = decrypt(vote.voteTo, vote.key, vote.iv);
                    console.log('Decrypted Vote:', decryptedVote);

                    // Find the party and increment its vote count
                    const party = partyVotes.find(p => p.name === decryptedVote);
                    if (party) {
                        party.votes += 1;
                    } else {
                        console.error('Party not found for decrypted vote:', decryptedVote);
                    }
                } catch (error) {
                    console.error('Decryption failed for voter:', voter._id, error);
                }
            } else {
                console.error('Key is undefined for voter:', voter._id);
            }
        });

        res.send({ partyVotes }.partyVotes);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
});









app.get('/parties/:state', async (req, res) => {
    let { state } = req.params;
    try {

        let allParties = await StatesAndParty.aggregate([
            { $match: { state: state } }, 
            {
                $lookup: {
                    from: 'parties', 
                    localField: 'parties', 
                    foreignField: '_id', 
                    as: 'partyDetails' 
                }
            },
            {
                $project: {
                    _id: 0, 
                    state: 1,
                    'partyDetails.party': 1, // Include the party name
                    'partyDetails.URL': 1 // Include the party URL
                }
            }
        ]);

        res.json(allParties[0].partyDetails);
    } catch (error) {
        console.error('Error fetching party details:', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/StateParties', async (req, res) => {
    try {
        const result = await StatesAndParty.find({});
        res.json(result);
    } catch (error) {
        console.error('Error fetching state parties:', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/State/:state', async (req, res) => {
    let { state } = req.params;
    try {
        let result = await StateAndDistrict.find({ state: state });
        res.json(result[0].districts);
    } catch (error) {
        console.error('Error fetching districts:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});
