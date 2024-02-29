import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// Import useHistory hook from react-router-dom
import './VolunteerForm.css';

function VolunteerLogin() {
    const [formData, setFormData] = useState({
        name: '',
        volunteername: '',
        volunteeremail: '',
        password: ''
    });

    // const history = useHistory(); // Initialize useHistory hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const fetchVolunteerDetails = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/orphange/getvoldetails');
                const volunteerData = response.data;
                if (volunteerData) {
                    setFormData({
                        name: volunteerData.name,
                        volunteername: volunteerData.volunteername,
                        volunteeremail: volunteerData.volunteeremail,
                        password: ''
                    });
                }
            } catch (error) {
                console.error('Error fetching volunteer details:', error);
            }
        };
        fetchVolunteerDetails();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7000/api/volunteer/addvolunteer', formData);
            console.log('Registration successful');
            const id = response.data._id;
            alert("Registered successfully");
            window.location.href = `/volunteerhome/${id}`;
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="registration-form-container">
            <h2>Volunteer Registration Form</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label htmlFor="name">OrphangeName:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="volunteername">Volunteer Name:</label>
                    <input type="text" id="volunteername" name="volunteername" value={formData.volunteername} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="volunteeremail">Email:</label>
                    <input type="email" id="volunteeremail" name="volunteeremail" value={formData.volunteeremail} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <input type="submit" value="Register" className="submit-btn" />
                </div>
            </form>
        </div>
    );
}

export default VolunteerLogin;
