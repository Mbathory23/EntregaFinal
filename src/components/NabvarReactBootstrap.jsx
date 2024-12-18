import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {

  console.log('NavBar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to='/' as={NavLink}>Play Gamers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/products/ofertas'>Ofertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/products/nuevos'>
                Nuevos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/products/juegos'>juegos</NavDropdown.Item>
              
              </NavDropdown>
          </Nav>
          <NavLink to='/cart' style={{textDecoration:'none'}}>
          <CartWidgetReactIcons/>
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;