import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBars = () => {
  return (
    <div>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link  to={"/"}>
        <Navbar.Brand >Learn school</Navbar.Brand>
        </Link>
        <Link  to={"/"}></Link>
      
          <Link  to={"/student"}>
            <div >
            <Nav >student</Nav>
            </div>
            </Link>
            <Link  to={"/teacher"}>
              <div>
            <Nav >
            teacher
            </Nav>
            </div>
            </Link>
         
       
      </Container>
    </Navbar>

</div>
     
  
  );
};

export default NavBars;
