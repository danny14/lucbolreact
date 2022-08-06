import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className={styles.NavBarLucbol}>
      <Container fluid>
        <Navbar.Brand href="#Home"><img src='https://lucbol.com/assets/why-growth.svg' alt='Logo' width="30" height="30" className="d-inline-block align-top"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Our Services</Nav.Link>
            <Nav.Link href="#action2">Team</Nav.Link>
            <Button >Contact US</Button>
          </Nav>          
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="#action1"><img src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png' alt='Facebook' width="30" height="30" className="d-inline-block align-top"></img></Nav.Link>
          <Nav.Link href="#action1"><img src='https://w7.pngwing.com/pngs/529/867/png-transparent-computer-icons-logo-twitter-miscellaneous-blue-logo-thumbnail.png' alt='Twitter' width="30" height="30" className="d-inline-block align-top"></img></Nav.Link>
          <Nav.Link href="#action1"><img src='' alt='Instagram' width="30" height="30" className="d-inline-block align-top"></img></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;