// ViewOrphanage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ViewOrphanage() {
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

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">HopeHeaven</Navbar.Brand>
                    <Nav className="me-auto" style={{ paddingLeft: '200px' }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Link to={'/addorphange'}><Nav.Link href="#features">View Details</Nav.Link></Link>
                        <Link to={'/viewadminorphange'}><Nav.Link href="#pricing">View Feedback</Nav.Link></Link>
                        <Nav.Link href="#pricing">Donate</Nav.Link>
                        <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ marginLeft: "200px" }}>
                {orphanages.map((orphanage) => (
                    <Card key={orphanage._id} sx={{ maxWidth: 900, margin: 5 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={`http://localhost:7000/public/images/${orphanage.image}`}
                            title={orphanage.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {orphanage.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {orphanage.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {orphanage.location}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/viewdetail/${orphanage._id}`} style={{ textDecoration: 'none' }}>
                                <Button size="small">View More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ViewOrphanage;
