import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import LucbolLogo from './../assets/image/lucbol-logo.png';
import FacebookLogo from './../assets/image/facebook-logo.png';
import InstagramLogo from './../assets/image/instagram-logo.png';
import LinkedinLogo from './../assets/image/linkedin-logo.png';
import * as Icon from 'react-bootstrap-icons';
import {FormattedMessage} from 'react-intl';
import {langContext} from './../context/langContext';

function NavScroll() {
  const language = useContext(langContext);

  return (
    <Navbar id="Home" expand="lg" className={styles.NavBarLucbol}>
      <Container fluid>
        <Navbar.Brand className={styles.NavBarBrandLogo} href="#Home"><img src={LucbolLogo} alt='Logo' className="d-inline-block align-top"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto text-center"
            style={{ maxHeight: '330px' }}
            navbarScroll
          >
            <Nav.Link className={styles.NavCenter} href="#Home"><FormattedMessage id='navbar.home' defaultMessage='Home' /></Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#AboutUs"><FormattedMessage id='navbar.aboutUs' defaultMessage='About Us'/></Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#OurServices"><FormattedMessage id='navbar.ourServices' defaultMessage='Our Services'/></Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#OurTeam"><FormattedMessage id='navbar.ourTeam' defaultMessage='Our Team'/></Nav.Link>
            <Nav.Link className={styles.NavCenter + ' pb-3'} href="#Testimonials"><FormattedMessage id='navbar.testimonials' defaultMessage='Testimonials' /></Nav.Link>
            <a href='#ContactUs'><Button className={styles.ButtonClass + ' mx-auto text-center'}><FormattedMessage id='navbar.contactUs' defaultMessage='Contact US' /> <Icon.Telephone className={styles.ButtonRotate}/></Button></a>            
          </Nav>
          <Nav className={styles.NavBarRedes + " d-flex justify-content-around flex-row mx-auto my-2 my-lg-0"} style={{ maxHeight: '100px' }}>
            <Nav.Link href="https://www.facebook.com/people/Lucbol-Global-Managment/100069916750216/" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} alt='Facebook' width="10" height="20" className="d-inline-block flex-row align-top"></img></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/company/lucbol-global-managment" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt='LinkedIn' width="20" height="20" className="d-inline-block flex-row align-top"></img></Nav.Link>
            <Nav.Link href="https://www.instagram.com/lucbol_gm/" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt='Instagram' width="20" height="20" className="d-inline-block flex-row align-top"></img></Nav.Link>
            <Button onClick={() => language.setLanguage('en-US')} variant="outline-success">EN</Button>
            <Button onClick={() => language.setLanguage('es-ES')} variant="outline-success">ES</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;