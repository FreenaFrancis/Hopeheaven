import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './front.css'
function FrontPage() {
  return (
    <div>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HopeHeaven</Navbar.Brand>
          <Nav className="me-auto" style={{paddingLeft:'200px'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to={'/login'}><Nav.Link href="#features">AdminLogin</Nav.Link></Link>
           <Link to={'/register'}><Nav.Link href="#pricing">UserLogin</Nav.Link></Link> 
           <Link to={'/volunteer'}><Nav.Link href="#pricing">VolunteerLogin</Nav.Link></Link>
            {/* <Nav.Link href="#pricing">Logout</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <div className='front'>
        <img src='https://tse1.mm.bing.net/th?id=OIP.uPneXr3PpyyZv_VdbRcIogHaEL&pid=Api&P=0&h=180' alt='' width={'100%'} height={'800px'}/>
      </div>
    </div>
  )
}

export default FrontPage
