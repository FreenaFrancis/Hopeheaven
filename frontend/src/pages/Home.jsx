import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Home() {
  const {id}= useParams()
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HopeHeaven</Navbar.Brand>
          <Nav className="me-auto" style={{paddingLeft:'200px'}}>
           <Nav.Link href="#home">Home</Nav.Link>
           <Link to ={'/vieworphange'}> Orphanges</Link>
            <Link to={'/viewfeedback'}><Nav.Link href="#features">View FeedBack</Nav.Link></Link>
           <Link to={'/viewadminorphange'}><Nav.Link href="#pricing"></Nav.Link></Link> 
            {/* <Nav.Link href="#pricing">View Donation History</Nav.Link> */}
            <Link to={'/getrequest'}><Nav.Link href="#pricing">View Volunteer request</Nav.Link></Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <img src="https://tse2.explicit.bing.net/th?id=OIP.cNWONWuLmiaWDEYAo8gncAHaEK&pid=Api&P=0&h=180" alt="" width={'100%'} height={'800px'}/>
      </div>
    </div>
  )
}

export default Home
