import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Verify.css"; // Import the CSS file for styling

function Verify() {
  let { state, district } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    voterId: '',
    homeState: state,
    homeDistrict: district,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3000/verify/${state}/${district}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success:', response.data);
      navigate(`/parties/${state}/${district}/${formData.name}`);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      navigate(`/State/${state}`);
      alert('Verification failed!');
    }
  };

  return (
    <div className="verify-container">
      <form onSubmit={handleSubmit} className="verify-form">
        <h1>Verify Your Identity</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Voter Id:
          <input
            type="text"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default Verify;
