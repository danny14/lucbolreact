import Container from 'react-bootstrap/Container';
import styles from './HeroSection.module.css';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import BackgroundImage from './../assets/image/imagen-principal.png';

export default function HeroSection(){
    return (
        <Container fluid className={styles.HeroSectionContainer}>
            <Row>
                <Col sm={6}>
                    <div className={styles.HeroSection}>
                        <h3>LUCBOL GLOBAL MANAGEMENT</h3>
                        <h1>Call center outsourcing</h1>
                        <p>
                            Here in Lucbol Global Management, we help you with your call center and work with our clients to tailor a recovery program to contact and resolve any customer service problem. 
                            With our outsourcing service you will manage your Contact Center in a comprehensive, simple and collaborative way.
                        </p>

                        <Button className={styles.ButtonClass}>Contact US! <Icon.ArrowRight className={styles.IconHero}/></Button>
                        <div className={styles.OurPartnersContainer}>
                            <h4>OUR PARTNERS</h4>
                            <Row className={styles.OurPartners}>
                                <Col>Imagen</Col>
                                <Col>Imagen</Col>
                                <Col>Imagen</Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col sm={6}></Col>
            </Row>
        </Container>
      );
}