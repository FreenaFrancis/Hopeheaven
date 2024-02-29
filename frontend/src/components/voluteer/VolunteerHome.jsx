import React from 'react'
import axios from 'axios';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function VolunteerHome() {
  const id=useParams()
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HopeHeaven</Navbar.Brand>
          <Nav className="me-auto" style={{paddingLeft:'200px'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to={`/giverequest/${id}`}><Nav.Link href="#features">Give Request</Nav.Link></Link>
           <Link to={'/viewdonation'}><Nav.Link href="#pricing">View Donation</Nav.Link></Link> 
           <Link to={'/givefeedback'}>  <Nav.Link href="#pricing">Give Feedback</Nav.Link></Link>
            {/* <Nav.Link href="#pricing">View Volunteer</Nav.Link> */}
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <img src='https://cdn.quotesgram.com/img/88/41/1189591642-b65584af3370d50fbf97d70688ce9ace.jpg' alt='' width={'100%'} height={'800px'}></img>
      </div>
    </div>
  )
}

export default VolunteerHome
