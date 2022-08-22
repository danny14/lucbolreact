import Container from 'react-bootstrap/Container';
import styles from './Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LucbolLogo from './../assets/image/lucbol-logo.png';
import FacebookLogo from './../assets/image/facebook-footer.png';
import LinkedinLogo from './../assets/image/linkedin-footer.png';
import InstagramLogo from './../assets/image/instagram-footer.png';
import {FormattedMessage} from 'react-intl';

export default function Footer(){
    return (
        <><Container className={styles.FooterContainer + ' mx-auto'}>
            <Row>
                <Col>
                    <a href='#Home'><img src={LucbolLogo} alt='Logo' className="d-inline-block align-top"></img></a>
                </Col>
                <Col>
                    <Row>
                        <a href="#Home" className="d-inline-block align-top"><FormattedMessage id='footer.home' defaultMessage='Home' /></a>
                    </Row>
                    <Row>
                        <a href="#AboutUs" className="d-inline-block align-top"><FormattedMessage id='footer.aboutUs' defaultMessage='About Us'/></a>
                    </Row>
                    <Row>
                        <a href="#OurServices" className="d-inline-block align-top"><FormattedMessage id='footer.ourServices' defaultMessage='Services'/></a>
                    </Row>
                    <Row>
                        <a href="#OurTeam" className="d-inline-block align-top"><FormattedMessage id='footer.ourTeam' defaultMessage='Team'/></a>
                    </Row>
                    <Row>
                        <a href="#Testimonials" className="d-inline-block align-top"><FormattedMessage id='footer.testimonials' defaultMessage='Testimonials' /></a>
                    </Row>
                    <Row>
                        <a href="#ContactUs" className="d-inline-block align-top"><FormattedMessage id='footer.contactUs' defaultMessage='Contact US' /></a>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        Email: info@lucbol.com
                    </Row>
                    <Row>
                        Phone: (US) +1 954 751 6201  -  (US) +1 954 751 6202
                    </Row>
                    <Row>
                        Address: Tampa, Florida  -  Medellin, Colombia
                    </Row>
                    <Row>
                        <FormattedMessage id='footer.followUs' defaultMessage='Follow Us' />                        
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://www.facebook.com/people/Lucbol-Global-Managment/100069916750216/" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} alt='Facebook' className="d-inline-block align-top p-2"></img></a>
                            <a href="https://www.linkedin.com/company/lucbol-global-management-bpo/" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt='LinkedIn' className="d-inline-block align-top p-2"></img></a>
                            <a href="https://www.instagram.com/lucbol_gm/" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt='Instagram' className="d-inline-block align-top p-2"></img></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.FooterCopyright}>
            <hr />
            <p><FormattedMessage id='footer.copyright' defaultMessage='Copyright © 2022 Lucbol Global Managment. All rights reserved.' /></p>
        </Container></>
      );
}