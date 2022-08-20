import Container from 'react-bootstrap/Container';
import styles from './HeroSection.module.css';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nubetel from './../assets/image/nubetel.png';
import CIT from './../assets/image/CIT.png';
import Inc5000 from './../assets/image/Inc5000.png';
import {FormattedMessage} from 'react-intl';

export default function HeroSection(){
    return (
        <Container fluid id="HeroSection" className={styles.HeroSectionContainer}>
            <Row>
                <Col sm={6}>
                    <div className={styles.HeroSection + ' m-5 p-2'}>
                        <h3 className='mt-3'>LUCBOL GLOBAL MANAGEMENT</h3>
                        <h1 className='mt-3'>Call Center Outsourcing</h1>
                        <p className='mt-5'>
                            Lucbol Global Management BPO offers a full bilingual (English/Spanish) call center with a range of services to improve loan servicing, first party 
                            collections, account receivable, customer service, sales, enhance customer experience and grow brand loyalty. Lucbol Call Center work for your needs 
                            around the clock to support your business and stay competitive in today's market.
                        </p>

                        <a href='#ContactUs'><Button className={styles.ButtonClass + ' p-3'}>Contact US! <Icon.ArrowRight className={styles.IconHero}/></Button></a>
                        <div className={styles.OurPartnersContainer}>
                            <h4>OUR PARTNERS</h4>
                            <Row className={styles.OurPartners}>
                                <Col><img src={Nubetel} alt='Facebook' width="150" height="100" className="d-inline-block align-top"></img></Col>
                                <Col><img src={Inc5000} alt='Inc5000' width="150" height="90" className="d-inline-block align-top"></img></Col>
                                <Col><img src={CIT} alt='Facebook' width="250" height="100" className="d-inline-block align-top"></img></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className={styles.HeroSection + ' m-5 p-2'}></div>
                </Col>
            </Row>
        </Container>
      );
}