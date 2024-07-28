import { useEffect, useState } from 'react';
import axios from 'axios';
function Party(){
    const [parties, setParties] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/parties')
        .then((res) => {
          console.log('API response:', res.data);  // Log the response
          if (Array.isArray(res.data)) {
            setParties(res.data);
          } else {
            console.error('Expected array but got:', res.data);
          }
        })
        .catch((err) => {
          console.error('API error:', err);
        });
    }, []);
    return(
        
        <>
        <h1>Political Parties</h1>
        <p>No Of Parties: {parties.length}</p>
  
        {parties.length > 0 && parties.map((party) => (
          <div key={party._id}>
            <h2>{party.party}</h2>
            <img src={party.URL} alt={party.party} width="100" />
          </div>
        ))}
      </>
    )
}

export default Party