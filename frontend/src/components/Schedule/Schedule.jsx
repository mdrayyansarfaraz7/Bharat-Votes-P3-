import React from 'react';
import './Schedule.css'
const Schedule = () => {
    const states = [
      {
        name: 'Arunachal Pradesh',
        
        votingDates: ['28th July'],
      },
      {
        name: 'Andhra Pradesh',
        
        votingDates: ['25th July'],
      },
      {
        name: 'Assam',
        
        votingDates: ['30th July'],
      },
      {
        name: 'Bihar',
        
        votingDates: ['27th July'],
      },
      {
        name: 'Chandigarh',
        
        votingDates: ['29th July'],
      },
      {
        name: 'Chhattisgarh',
        
        votingDates: ['28th July'],
      },
      {
        name: 'Delhi',
        
        votingDates: ['30th July'],
      },
      {
        name: 'Goa',
        
        votingDates: ['27th July'],
      },
      {
        name: 'Daman & Diu',
        
        votingDates: ['25th July'],
      },
      {
        name: 'Karnataka',
        
        votingDates: ['30th July'],
      },
      {
        name: 'Lakshadweep',
        
        votingDates: ['25th July'],
      },
      {
        name: 'Madhya Pradesh',
        
        votingDates: ['30th July'],
      },
      {
        name: 'Nagaland',
        
        votingDates: ['25th July'],
      },
      {
        name: 'Odisha',
        
        votingDates: ['30th July'],
      },
      {
        name: 'Pondicherry',
        
        votingDates: ['27th July'],
      },
      {
        name: 'Rajasthan',
        
        votingDates: ['28th July'],
      },
      {
        name: 'Sikkim',
        
        votingDates: ['28th July'],
      },
      {
        name: 'Telangana',
        
        votingDates: ['26th July'],
      },
      {
        name: 'Uttarakhand',
        
        votingDates: ['28th July'],
      },
      {
        name: 'West Bengal',
        
        votingDates: ['26th July'],
      }
    ];

  return (
    <div className="app">
      <h1>Voting Schedule</h1>
      <div className="state-cards">
        {states.map((state, index) => (
          <div className="state-card" key={index}>
            <h3 className='state-heading'>{state.name}</h3>
            <div className="voting-dates">
              {state.votingDates.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;