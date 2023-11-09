
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./Header.css";
function Header(){
    return(
        <div className='fondoNav'>
             <Navbar expand="lg">
      <Container className='contenedorNav'>
        <Navbar.Brand> <Link to="/" className='hackFlix'>Hackflix</Link></Navbar.Brand>
        
        
          <Nav className="ms-auto desplegable">
          <Nav.Link><Link to="/search" className='search'>Search</Link></Nav.Link>
            <Nav.Link><Link to="/sobre-nosotros" className='sobreNosotros'>Sobre Nosotros</Link></Nav.Link>
            <Nav.Link> <Link to="/contacto" className='contacto'>Contacto</Link></Nav.Link>
            
          </Nav>
        
      </Container>
    </Navbar>
        </div>
        
    );
}

export default Header;