import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Party.css'; 

function Party() {
  const [parties, setParties] = useState([]);
  const { state, district, name } = useParams();
  

  useEffect(() => {
    axios.get(`http://localhost:8080/votes/${state}/${district}`)
      .then((res) => {
        console.log('API response:', res.data);
        if (Array.isArray(res.data)) {
          setParties(res.data);
        } else {
          console.error('Expected array but got:', res.data);
        }
      })
      .catch((err) => {
        console.error('API error:', err);
      });
  }, [state]);


  return (
    <div className="party-container">
      <h1>Total Votes Recieved By Each Party For The District of {district}</h1>

      {parties.length > 0 && parties.map((party) => (
        <div key={party._id} className="party-card">
          <h1>{party.name}</h1>
          <img src={party.URL} alt={party.name} />
          <h2>Total Votes:{party.votes}</h2>
        </div>
      ))}
    </div>
  );
}

export default Party;
