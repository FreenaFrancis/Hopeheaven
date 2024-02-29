import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GiveRequestForm() {
    const [formData, setFormData] = useState({
        name: '',
        volunteername: '',
        volunteeremail: '',
        purpose: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
// useEffect(()=>{
//     axios.get('http://localhost:7000/api/volunteer/getvolunteerbyid')
// })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:7000/api/volunteer/giverequests', formData)
            .then(response => {
                console.log('Request submitted successfully:', response.data);
                setFormData({
                    name: '',
                    volunteername: '',
                    volunteeremail: '',
                    purpose: '',
                    description: ''
                });
                console.log(formData);
                alert("requested successfully")
            })
            .catch(error => {
                console.error('Error submitting request:', error);
            });
    };

    return (
        <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="volunteername" className="form-label">Volunteer Name:</label>
                <input type="text" className="form-control" id="volunteername" name="volunteername" value={formData.volunteername} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="volunteeremail" className="form-label">Volunteer Email:</label>
                <input type="email" className="form-control" id="volunteeremail" name="volunteeremail" value={formData.volunteeremail} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="purpose" className="form-label">Purpose:</label>
                <input type="text" className="form-control" id="purpose" name="purpose" value={formData.purpose} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default GiveRequestForm;

