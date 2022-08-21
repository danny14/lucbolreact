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
import ROK from './../assets/image/ROK.png';
import Carousel from 'react-bootstrap/Carousel';


export default function HeroSection(){
    return (
        <Container fluid id="HeroSection" className={styles.HeroSectionContainer}>
            <Row>
                <Col sm={6}>
                    <div className={styles.HeroSection + ' m-5 p-2'}>
                        <h3 className='mt-3'><FormattedMessage id='heroSection.title' defaultMessage="LUCBOL GLOBAL MANAGEMENT" /></h3>
                        <h1 className='mt-3'><FormattedMessage id='heroSection.subtitle' defaultMessage="Call Center Outsourcing" /></h1>
                        <p className='mt-5'>
                            <FormattedMessage id='heroSection.description' defaultMessage="Lucbol Global Management BPO offers a full bilingual (English/Spanish) call center with a range of services to improve loan servicing, first party collections, account receivable, customer service, sales, enhance customer experience and grow brand loyalty. Lucbol Call Center work for your needs around the clock to support your business and stay competitive in today's market." />
                        </p>

                        <a href='#ContactUs'><Button className={styles.ButtonClass + ' p-3'}><FormattedMessage id='heroSection.contactUs' defaultMessage="Contact US!" /> <Icon.ArrowRight className={styles.IconHero}/></Button></a>
                        <div className={styles.OurPartnersContainer}>
                            <h4><FormattedMessage id='heroSection.ourPartner' defaultMessage="OUR PARTNERS" /></h4>
                            <Row className={styles.OurPartners}>
                                <Carousel className = 'w-25' controls={false} indicators={false} interval={100}  variant="dark">
                                    <Carousel.Item>
                                        <img src={Nubetel} alt='Nubetel' width="150" height="100" className="d-inline-block align-top"></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={Inc5000} alt='Inc5000' width="150" height="100" className="d-inline-block align-top"></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={ROK} alt='ROK' width="250" height="100" className="d-inline-block align-top"></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={CIT} alt='CIT' width="250" height="100" className="d-inline-block align-top"></img>
                                    </Carousel.Item>
                                </Carousel>
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