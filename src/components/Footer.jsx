import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./Header.css";
function Footer(){
    return(
        <div className='fondoNav mt-4'>
             <Navbar expand="lg">
      <Container className='contenedorNav'>
      <Navbar.Brand> <Link to="/" className='hackFlix'>Hackflix</Link></Navbar.Brand>
        
          <Nav className="ms-auto desplegable">
            Copyright © Hackflix 2023
            
           
          </Nav>
        
      </Container>
    </Navbar>
        </div>
        
    );
}

export default Footer;