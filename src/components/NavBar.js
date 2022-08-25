import React, {useContext,  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './NavBar.module.css';
import LucbolLogo from './../assets/image/lucbol-logo.webp';
import FacebookLogo from './../assets/image/facebook-logo.webp';
import InstagramLogo from './../assets/image/instagram-logo.webp';
import LinkedinLogo from './../assets/image/linkedin-logo.webp';
import * as Icon from 'react-bootstrap-icons';
import {FormattedMessage} from 'react-intl'
import {langContext} from './../context/langContext';
import USA from './../assets/image/usa.svg';
import CO from './../assets/image/co.svg';

function NavScroll() {  
  const language = useContext(langContext);
  const [imgLanguage, setImgLanguage] = useState(USA);

  const validation = (e) => {
    if (e === true) {
      setImgLanguage(USA);
    }else{
      setImgLanguage(CO);
    }
  };

  return (
    <Navbar id="Home" expand="lg" className={styles.NavBarLucbol}>
      <Container fluid>
        <Navbar.Brand className={styles.NavBarBrandLogo} href="#Home"><img src={LucbolLogo} alt='Lucbol Global Management' className="d-inline-block align-top"></img></Navbar.Brand>
        <NavDropdown title={<img src={imgLanguage} alt='Language Flag' className="d-inline-block align-top" width="25" height="25"></img>} id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => {language.setLanguage('en-US'); validation(true);}} variant="outline-success"><FormattedMessage id='navbar.en' defaultMessage='ENGLISH' /></NavDropdown.Item>
            <NavDropdown.Item onClick={() => {language.setLanguage('es-ES'); validation(false);}} variant="outline-success"><FormattedMessage id='navbar.es' defaultMessage='SPANISH' /></NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto text-center"
            style={{ maxHeight: '330px' }}
            navbarScroll
          >
            <Nav.Link className={styles.NavCenter} href="#Home"><FormattedMessage id='navbar.home' defaultMessage='Home' /></Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#AboutUs"><FormattedMessage id='navbar.aboutUs' defaultMessage='About Us'/></Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#OurServices"><FormattedMessage id='navbar.ourServices' defaultMessage='Services'/></Nav.Link>
            <Nav.Link className={styles.NavCenter} href="#OurTeam"><FormattedMessage id='navbar.ourTeam' defaultMessage='Team'/></Nav.Link>
            <Nav.Link className={styles.NavCenter + ' pb-3'} href="#Testimonials"><FormattedMessage id='navbar.testimonials' defaultMessage='Testimonials' /></Nav.Link>
            <a href='#ContactUs'><Button className={styles.ButtonClass + ' mx-auto text-center'}><FormattedMessage id='navbar.contactUs' defaultMessage='Contact US' /> <Icon.Telephone className={styles.ButtonRotate}/></Button></a>            
          </Nav>
          <Nav className={styles.NavBarRedes + " d-flex justify-content-around flex-row mx-auto my-2 my-lg-0"} style={{ maxHeight: '100px' }}>
            <Nav.Link href="https://www.facebook.com/people/Lucbol-Global-Managment/100069916750216/" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} alt='Facebook' width="10" height="20" className="d-inline-block flex-row align-top"></img></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/company/lucbol-global-management-bpo/" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt='LinkedIn' width="20" height="20" className="d-inline-block flex-row align-top"></img></Nav.Link>
            <Nav.Link href="https://www.instagram.com/lucbol_gm/" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt='Instagram' width="20" height="20" className="d-inline-block flex-row align-top"></img></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;