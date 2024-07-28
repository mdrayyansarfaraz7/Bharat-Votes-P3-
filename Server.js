const bcrypt = require('bcrypt');
const crypto = require('crypto'); // Using the built-in crypto module

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);//Generating encryption key
const iv = crypto.randomBytes(16);//Initialization Vector (IV)

function encryptVote(vote) {
  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(vote);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

async function main() {
  const voterId = 'ZJJ3172285'; // Example Voter ID
  const saltRounds = 10;

  try {
    // Hash the Voter ID
    const hashedVoterId = await bcrypt.hash(voterId, saltRounds);
    console.log('Hashed Voter ID:', hashedVoterId);

    const vote = 'TMC'; // Example vote
    const encryptedVote = encryptVote(vote);
    console.log('Encrypted Vote:', encryptedVote);

    // Example of storing hashed and encrypted data
    const database = {
      hashedVoterId,
      encryptedVote
    };
    console.log('Stored in Database:', database);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
