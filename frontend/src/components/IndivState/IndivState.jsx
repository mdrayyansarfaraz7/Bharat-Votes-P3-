import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

function IndivState(){
    let {state}=useParams();

    let[districts,setDistricts]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/State/${state}`)
          .then((res) => {
            console.log('API response:', res.data);  
            if (Array.isArray(res.data)) {
              setDistricts(res.data);
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
        
        <div className="district-container">
            <h1>{state}</h1>
            <h1>Select District</h1>
            <div className="district-grid">
                {districts.length > 0 && districts.map((district) => (
                  <Link to={`/votes/${state}/${district.name}`}>
                    <div key={district._id} className="district-card">
                        <p>{district.name}</p>
                    </div>
                  </Link>
                    
                ))}
            </div>
        </div>
       
        </>
    )
}

export default IndivState