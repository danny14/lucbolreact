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
        <Container className={styles.FooterContainer + ' mx-auto'}>
            <Row>
                <Col>
                    <img src={LucbolLogo} alt='Logo' className="d-inline-block align-top"></img>
                </Col>
                <Col>
                    <Row>
                        <a href="#action1" className="d-inline-block align-top">Home</a>
                    </Row>
                    <Row>
                        <a href="#AboutUs" className="d-inline-block align-top">About Us</a>
                    </Row>
                    <Row>
                        <a href="#OurServices" className="d-inline-block align-top">Our Services</a>
                    </Row>
                    <Row>
                        <a href="#OurTeam" className="d-inline-block align-top">Our Team</a>
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
                            <img src={FacebookLogo} alt='Facebook' className="d-inline-block align-top p-2"></img>
                            <img src={LinkedinLogo} alt='LinkedIn' className="d-inline-block align-top p-2"></img>
                            <img src={InstagramLogo} alt='Instagram' className="d-inline-block align-top p-2"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      );
}