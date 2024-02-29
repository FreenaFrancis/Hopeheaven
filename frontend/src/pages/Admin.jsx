import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Admin() {
  const [message, setMessage] = useState('');
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:7000/api/user/admin')
      .then(res => {
        if (res.data === "Success") {
          setMessage("Admin");
        } else {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  }, [navigate]); // Include navigate in the dependency array



  return (
    <div>
      <h3>Admin Page {message}</h3>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HopeHeaven</Navbar.Brand>
          <Nav className="me-auto" style={{paddingLeft:'200px'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to={'/addorphange'}><Nav.Link href="#features">Add Orphange</Nav.Link></Link>
           <Link to={'/viewadminorphange'}><Nav.Link href="#pricing">Manage Orphange</Nav.Link></Link> 
           <Link to={'/viewdonation'}> <Nav.Link href="#pricing">View Donor details</Nav.Link></Link>
            <Link to={'/viewusers'}> <Nav.Link href="#features">View User details</Nav.Link></Link>
            <Link to={'/viewvolunteer'}>    <Nav.Link href="#features">View Volunteer</Nav.Link></Link>
           <Link to ={'/'}> <Nav.Link>Logout</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <img src='https://tse1.mm.bing.net/th?id=OIP.uPneXr3PpyyZv_VdbRcIogHaEL&pid=Api&P=0&h=180' alt='' width={'100%'} height={'800px'}/>
      </div>
    </div>
  );
}

export default Admin;
