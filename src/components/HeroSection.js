import Container from 'react-bootstrap/Container';
import styles from './HeroSection.module.css';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nubetel from './../assets/image/nubetel.png';
import CIT from './../assets/image/CIT.png';

export default function HeroSection(){
    return (
        <Container fluid id="HeroSection" className={styles.HeroSectionContainer}>
            <Row>
                <Col sm={6}>
                    <div className={styles.HeroSection + ' m-5 p-5'}>
                        <h3>LUCBOL GLOBAL MANAGEMENT</h3>
                        <h1>Call center outsourcing</h1>
                        <p>
                            Here in Lucbol Global Management, we help you with your call center and work with our clients to tailor a recovery program to contact and resolve any customer service problem. 
                            With our outsourcing service you will manage your Contact Center in a comprehensive, simple and collaborative way.
                        </p>

                        <a href='#ContactUs'><Button className={styles.ButtonClass}>Contact US! <Icon.ArrowRight className={styles.IconHero}/></Button></a>
                        <div className={styles.OurPartnersContainer}>
                            <h4>OUR PARTNERS</h4>
                            <Row className={styles.OurPartners}>
                                <Col><img src={Nubetel} alt='Facebook' width="150" height="100" className="d-inline-block align-top"></img></Col>
                                <Col><img src={CIT} alt='Facebook' width="250" height="100" className="d-inline-block align-top"></img></Col>
                                {/*<Col>Imagen</Col>*/}
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col sm={6}></Col>
            </Row>
        </Container>
      );
}