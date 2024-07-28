import React from "react";
import './HowToVote.css';
import img1 from '../../assets/Register.png'; 
import img2 from '../../assets/Schedule.png';
import img3 from '../../assets/State.png';
import img4 from '../../assets/District.png';
import img5 from '../../assets/CastVote.png';
import img6 from '../../assets/Verify.png';



const HowToVote = () => {
    const imageData = [
        {
            image: img1,
            instruction: 'Register Yourself',
            writing: 'Ensure you have all necessary documents.'
        },
        {
            image: img2,
            instruction: 'Check Schedule',
            writing: 'Find out when the voting will take place in your area.'
        },
        {
            image: img3,
            instruction: 'Select Home State',
            writing: 'Verify your Home State for voting.'
        },
        {
            image: img4,
            instruction: 'Select District',
            writing: 'Choose the correct district to cast your vote.'
        },
        {
            image: img6,  
            instruction: 'Verify Epic',
            writing: 'Make sure your voter ID (Epic) is up to date.'
        },
        {
            image: img5,
            instruction: 'Cast Vote',
            writing: 'Go to your designated polling station and cast your vote.'
        }
    ];

    return (
        <div className="how-to-vote-container">
            <h1 className="how-to-vote">How To Vote</h1>
            <ul>
                {imageData.map((item, index) => (
                    <li key={index}>
                        {item.image && <img src={item.image} alt={`Step ${index + 1}`} />}
                        <div>
                            <h2 className="instruction">{item.instruction}</h2>
                            <p className="writing">{item.writing}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HowToVote;