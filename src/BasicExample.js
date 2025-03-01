import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavItem,
  CDBNavLink,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBBtn,
  CDBNavToggle,
  CDBIcon,
  CDBCollapse,
  CDBNavbarNav,
  CDBContainer,
} from 'cdbreact';
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="#333" data-bs-theme="dark">  
      <Container fluid color="dark">
        <Navbar.Brand href="#" color="dark">          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Calculadora"> <CDBIcon className="me-2" icon="home" />Home</Nav.Link>
            <Nav.Link href="/Contato"> <CDBIcon className="me-2"  icon="fa-regular fa-envelope" />Contato</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default BasicExample;