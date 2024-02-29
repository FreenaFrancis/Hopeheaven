import React, { useState } from 'react';
import axios from 'axios';

function DonationType() {
    // State variables to store form data
    const [formData, setFormData] = useState({
        donateCategory: '',
        image: null
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle image file selection
    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({
            ...formData,
            image: imageFile
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('donateCategory', formData.donateCategory);
        formDataToSend.append('image', formData.image);
        
        try {
            const response = await axios.post('http://localhost:7000/api/orphange/donatecategory', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert("uploaded")
            // Add any success handling code here
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add error handling code here
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Donation Category Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="donateCategory" className="form-label">Donation Category</label>
                                    <input type="text" className="form-control" id="donateCategory" name="donateCategory" value={formData.donateCategory} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} required />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonationType;
