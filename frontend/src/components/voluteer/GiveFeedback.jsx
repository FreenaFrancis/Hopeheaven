import React, { useState } from 'react';
import axios from 'axios';

function GiveFeedback() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the form data to the backend server
        axios.post('http://localhost:7000/api/volunteer/givefeedback', formData)
            .then(response => {
                console.log('Feedback submitted successfully:', response.data);
                // Reset the form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    feedback: ''
                });
                alert("send feedback successfully")
            })
            .catch(error => {
                console.error('Error submitting feedback:', error);
            });
    };

    return (
        <div>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Feedback:</label>
                    <textarea className="form-control" id="feedback" name="feedback" value={formData.feedback} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default GiveFeedback;
