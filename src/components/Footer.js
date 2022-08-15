import Container from 'react-bootstrap/Container';
import styles from './Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LucbolLogo from './../assets/image/lucbol-logo.png';
import FacebookLogo from './../assets/image/facebook-footer.png';
import LinkedinLogo from './../assets/image/linkedin-footer.png';
import InstagramLogo from './../assets/image/instagram-footer.png';

export default function Footer(){
    return (
        <><Container className={styles.FooterContainer + ' mx-auto'}>
            <Row>
                <Col>
                    <a href='#Home'><img src={LucbolLogo} alt='Logo' className="d-inline-block align-top"></img></a>
                </Col>
                <Col>
                    <Row>
                        <a href="#Home" className="d-inline-block align-top">Home</a>
                    </Row>
                    <Row>
                        <a href="#AboutUs" className="d-inline-block align-top">About Us</a>
                    </Row>
                    <Row>
                        <a href="#OurServices" className="d-inline-block align-top">Our Services</a>
                    </Row>
                    <Row>
                        <a href="#OurTeam" className="d-inline-block align-top">Team</a>
                    </Row>
                    <Row>
                        <a href="#Testimonials" className="d-inline-block align-top">Testimonials</a>
                    </Row>
                    <Row>
                        <a href="#ContactUs" className="d-inline-block align-top">Contact Us</a>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        Email
                    </Row>
                    <Row>
                        Phone
                    </Row>
                    <Row>
                        Address
                    </Row>
                    <Row>
                        Follow Us
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://www.facebook.com/people/Lucbol-Global-Managment/100069916750216/" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} alt='Facebook' className="d-inline-block align-top p-2"></img></a>
                            <a href="https://www.linkedin.com/company/lucbol-global-managment" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt='LinkedIn' className="d-inline-block align-top p-2"></img></a>
                            <a href="https://www.instagram.com/lucbol_gm/" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt='Instagram' className="d-inline-block align-top p-2"></img></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.FooterCopyright}>
            <hr />
            <p>Copyright © 2022 Lucbol Global Managment. All rights reserved.</p>
        </Container></>
      );
}