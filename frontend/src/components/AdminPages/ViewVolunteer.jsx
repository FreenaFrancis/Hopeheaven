import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewVolunteer() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Fetch volunteer data from the backend API
    axios.get('http://localhost:7000/api/volunteer/getvolunteer')
      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.error('Error fetching volunteers:', error);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Volunteer ID</th>
            <th>Name</th>
            <th>Volunteer Name</th>
            <th>Volunteer Email</th>
            <th>Password</th>
            
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer, index) => (
            <tr key={index}>
                <td>{volunteer._id}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.volunteername}</td>
              <td>{volunteer.volunteeremail}</td>
              <td>{volunteer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewVolunteer;
