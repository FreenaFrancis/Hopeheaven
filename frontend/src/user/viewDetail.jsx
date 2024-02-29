// ViewDetail.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia'; // Import CardMedia
import { Button } from 'react-bootstrap';
function ViewDetail() {
    const [details, setDetails] = useState({});
    const { id } = useParams(); // Get the orphanage ID from URL parameters

    useEffect(() => {
        const fetchOrphanageDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/orphange/getDetail/${id}`);
                setDetails(response.data);
            } catch (error) {
                console.error('Error fetching orphanage details:', error);
            }
        };

        fetchOrphanageDetails();
    }, [id]);

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">   {details.name}</Navbar.Brand>
                    <Nav className="me-auto" style={{ paddingLeft: '200px' }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">View Details</Nav.Link>
                        <Nav.Link href="#pricing">View Feedback</Nav.Link>
                        <Nav.Link href="#pricing">Donate</Nav.Link>
                        <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ marginLeft: "20px" }}>
                <Card sx={{ maxWidth: 1500, margin: 5 }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="500"
                            image={`http://localhost:7000/public/images/${details.image}`}
                            alt={details.name}
                        />
                        
                        <Typography gutterBottom variant="h5" component="div">
                            {details.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description: {details.description}
                        </Typography>
                        <h4>Contact Details</h4>
                        <Typography variant="body2" color="text.secondary">
                            Location: {details.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone Number: {details.phonenumber}
                        </Typography>
                       <h4>Volunteer Details</h4>
                        <Typography variant="body2" color="text.secondary">
                            Volunteer Name: {details.volunteername}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Volunteer Email: {details.volunteeremail}
                        </Typography>
                        {/* You can display other details here */}
                        <Link to={`/donate/${id}`}><Button>Donate</Button></Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default ViewDetail;
