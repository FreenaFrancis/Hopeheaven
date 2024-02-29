import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewDonation() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donation data from the backend API
    axios.get('http://localhost:7000/api/orphange/getDonateUser')
      .then(response => {
        setDonations(response.data);
      })
      .catch(error => {
        console.error('Error fetching donations:', error);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Description</th>
            <th>Name</th>
            <th>Donate Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.username}</td>
              <td>{donation.email}</td>
              <td>{donation.description}</td>
              <td>{donation.name}</td>
              <td>{donation.donateCategory}</td>
              <td>{donation.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDonation;
