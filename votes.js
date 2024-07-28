const fs = require('fs');
const path = require('path');

const votesFilePath = path.join( 'votes.js', 'votes.json');

// Function to initialize the votes file
function initializeVotes() {
    if (!fs.existsSync(votesFilePath)) {
        const initialData = [];
        fs.writeFileSync(votesFilePath, JSON.stringify(initialData, null, 2));
    }
}

// Function to get the votes
function getVotes() {
    if (fs.existsSync(votesFilePath)) {
        const data = fs.readFileSync(votesFilePath);
        return JSON.parse(data);
    }
    return [];
}

// Function to save votes
function saveVotes(votes) {
    fs.writeFileSync(votesFilePath, JSON.stringify(votes, null, 2));
}

// Function to update votes
function updateVotes(partyName, voteCount) {
    let votes = getVotes();
    const partyIndex = votes.findIndex(party => party.name === partyName);
    if (partyIndex !== -1) {
        votes[partyIndex].votes += voteCount;
    } else {
        votes.push({ name: partyName, votes: voteCount });
    }
    saveVotes(votes);
}

module.exports = {
    initializeVotes,
    getVotes,
    updateVotes
};
