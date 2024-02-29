import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

function ViewAdminOrphanage() {
    const [orphanages, setOrphanages] = useState([]);

    useEffect(() => {
        const fetchOrphanages = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/orphange/getorphanage');
                setOrphanages(response.data.data);
            } catch (error) {
                console.error('Error fetching orphanage data:', error);
            }
        };

        fetchOrphanages();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:7000/api/orphange/deleteorphange/${id}`);
            // After successful deletion, update the state to remove the deleted orphanage
            setOrphanages(orphanages.filter(orphanage => orphanage._id !== id));
        } catch (error) {
            console.error('Error deleting orphanage:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Orphanage Information</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Phone Number</th>
                        <th>Description</th>
                        <th>Volunteer Name</th>
                        <th>Volunteer Email</th>
                        <th>Image</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orphanages.map((orphanage) => (
                        <tr key={orphanage._id}>
                            <td>{orphanage.name}</td>
                            <td>{orphanage.location}</td>
                            <td>{orphanage.phonenumber}</td>
                            <td>{orphanage.description}</td>
                            <td>{orphanage.volunteername}</td>
                            <td>{orphanage.volunteeremail}</td>
                            <td>
                                <img
                                    src={`http://localhost:7000/public/images/${orphanage.image}`}
                                    alt={orphanage.name}
                                    style={{ width: '100px', height: 'auto' }}
                                    onError={(e) => console.error('Error loading image:', e)}
                                />
                            </td>
                            {/* Use Link to create the edit link */}
                            <td><Link to={`/updateorphange/${orphanage._id}`}><Button>Edit</Button></Link></td>
                            <td><Button onClick={() => handleDelete(orphanage._id)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewAdminOrphanage;
