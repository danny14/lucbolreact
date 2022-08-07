import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import LucbolLogo from './../assets/image/lucbol-logo.png';
import FacebookLogo from './../assets/image/facebook-logo.png';
import InstagramLogo from './../assets/image/instagram-logo.png';
import TwitterLogo from './../assets/image/twitter-logo.png';
import * as Icon from 'react-bootstrap-icons';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (
    <Navbar expand="lg" className={styles.NavBarLucbol}>
      <Container fluid>
        <Navbar.Brand className={styles.NavBarBrandLogo} href="#Home"><img src={LucbolLogo} alt='Logo' className="d-inline-block align-top"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className={styles.NavCenter} href="#action1">Home</Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#action2">About Us</Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#action2">Our Services</Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#action2">Team</Nav.Link>
            <Button className={styles.ButtonClass}>Contact US <Icon.Telephone className={styles.ButtonRotate}/></Button>
          </Nav>          
        </Navbar.Collapse>
        <Nav className={styles.NavBarRedes}>
          <Nav.Link href="#action1"><img src={FacebookLogo} alt='Facebook' width="10" height="20" className="d-inline-block align-top"></img></Nav.Link>
          <Nav.Link href="#action1"><img src={TwitterLogo} alt='Twitter' width="20" height="20" className="d-inline-block align-top"></img></Nav.Link>
          <Nav.Link href="#action1"><img src={InstagramLogo} alt='Instagram' width="20" height="20" className="d-inline-block align-top"></img></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScroll;