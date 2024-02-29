import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './volunteer.css'; // Import CSS file for styling

function Volunteer() {
  const [selectedOption, setSelectedOption] = useState('');
  const [orphanageNames, setOrphanageNames] = useState([]);

  useEffect(() => {
    fetchOrphanageNames();
  }, []);

  const fetchOrphanageNames = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/orphange/getorphanagenames');
      setOrphanageNames(response.data);
    } catch (error) {
      console.error('Error fetching orphanage names:', error);
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      // window.location.href = `/volunteerlogin/${selectedOption}`;
    } else {
      // Handle case when no option is selected
      console.error('No orphanage selected');
    }
  };

  return (
    <div className="volunteer-container"> {/* Apply class for container styling */}
      <form onSubmit={handleSubmit} className="volunteer-form"> {/* Apply class for form styling */}
        <h2 className="form-title">Select Orphanage</h2> {/* Apply class for title styling */}
        <select value={selectedOption} onChange={handleChange} className="select-box"> {/* Apply class for select box styling */}
          <option value="">Select</option>
          {orphanageNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <Link to={'/volunteerlogin'} className="submit-link"> {/* Apply class for link styling */}
          <button type="submit" className="submit-button">Submit</button> {/* Apply class for button styling */}
        </Link>
      </form>
    </div>
  );
}

export default Volunteer;
