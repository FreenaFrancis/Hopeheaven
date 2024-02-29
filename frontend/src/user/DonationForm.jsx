import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DonationForm() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        description: '',
        name: '',
        donateCategory: '',
        amount: ''
    });
    const [donateCategories, setDonateCategories] = useState([]);
    const [orphanageNames, setOrphanageNames] = useState([]);
    const [selectedOrphanage, setSelectedOrphanage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:7000/api/orphange/donatebyuser', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const fetchOrphanageNames = async () => {
        try {
            const response = await axios.get('http://localhost:7000/api/orphange/getorphanagenames');
            setOrphanageNames(response.data);
        } catch (error) {
            console.error('Error fetching orphanage names:', error);
        }
    };

    const handleOrphanageChange = (e) => {
        setSelectedOrphanage(e.target.value);
        setFormData({
            ...formData,
            name: e.target.value // Change to 'name' to match backend
        });
    };

    useEffect(() => {
        fetchOrphanageNames();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/orphange/getdonateCategory');
                const categories = response.data.map(category => category.donateCategory);
                setDonateCategories(categories);
                console.log("donatetd successfully");
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Donation Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="orphanagename" className="form-label">Orphanage Name</label> {/* Change id to 'orphanagename' */}
                    <select value={selectedOrphanage} onChange={handleOrphanageChange} className="form-select">
                        <option value="">Select</option>
                        {orphanageNames.map((name, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="donateCategory" className="form-label">Donation Category</label>
                    <select className="form-select" id="donateCategory" name="donateCategory" value={formData.donateCategory} onChange={handleChange} required>
                        <option value="">Select category</option>
                        {donateCategories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="text" className="form-control" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default DonationForm;
