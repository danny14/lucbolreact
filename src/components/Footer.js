import Container from 'react-bootstrap/Container';
import styles from './Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LucbolLogo from './../assets/image/lucbol-logo.webp';
import {FormattedMessage} from 'react-intl';
import * as Icon from 'react-bootstrap-icons';

export default function Footer(){
    return (
        <><Container className={styles.FooterContainer + ' mx-auto'}>
            <Row>
                <Col>
                    <a href='#Home'><img src={LucbolLogo} alt='Lucbol Global Management' className="d-inline-block align-top" width="220" height="90"></img></a>
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
                        <div><Icon.EnvelopeFill className={styles.FooterIcon}/> info@lucbol.com</div>
                    </Row>
                    <Row>
                        <div><Icon.TelephoneFill className={styles.FooterIcon}/> (US) +1 954 751 6201  -  (US) +1 954 751 6202</div>
                    </Row>
                    <Row>
                        <div><Icon.HouseFill className={styles.FooterIcon}/> Tampa, Florida  -  Medellin, Colombia</div>
                    </Row>
                    <Row>
                        <div><Icon.ChatRightHeartFill className={styles.FooterIcon}/> <FormattedMessage id='footer.followUs' defaultMessage='Follow Us' /> </div>                       
                    </Row>
                    <Row>
                        <Col>                            
                            <a href="https://www.facebook.com/people/Lucbol-Global-Managment/100069916750216/" target="_blank" rel="noopener noreferrer"><Icon.Facebook className={styles.FooterIcon + ' d-inline-block align-center m-2'}/></a>
                            <a href="https://www.linkedin.com/company/lucbol-global-management-bpo/" target="_blank" rel="noopener noreferrer"><Icon.Linkedin className={styles.FooterIcon + ' d-inline-block align-center m-2'}/></a>
                            <a href="https://www.instagram.com/lucbol_gm/" target="_blank" rel="noopener noreferrer"><Icon.Instagram className={styles.FooterIcon + ' d-inline-block align-center m-2'}/></a>
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