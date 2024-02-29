import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useParams,Link, useNavigate } from 'react-router-dom';

function ViewRequest() {
    const [requestData, setRequestData] = useState([]);
const id=useParams()
const navigate=useNavigate()
    useEffect(() => {
        // Fetch data from the backend server
        axios.get('http://localhost:7000/api/volunteer/getrequest')
            .then(response => {
                setRequestData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleClick=(e)=>{
        e.preventDefault();
        navigate(`/donationform/${id}`)
    }
    return (
        <div>
            <h2>Give Request Data</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Volunteer Name</th>
                        <th>Volunteer Email</th>
                        <th>Purpose</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requestData.map(request => (
                        <tr key={request._id}>
                            <td>{request.name}</td>
                            <td>{request.volunteername}</td>
                            <td>{request.volunteeremail}</td>
                            <td>{request.purpose}</td>
                            <td>{request.Description}</td>
                           <td><Button onClick={handleClick}>Accept Donate</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewRequest;
