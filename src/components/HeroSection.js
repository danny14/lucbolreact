import Container from 'react-bootstrap/Container';
import styles from './HeroSection.module.css';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nubetel from './../assets/image/nubetel.webp';
import CIT from './../assets/image/CIT.webp';
import Inc5000 from './../assets/image/Inc5000.webp';
import ROK from './../assets/image/ROK.webp';
import {FormattedMessage} from 'react-intl';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function HeroSection(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3001 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1201 },
          items: 3
        },
        laptop: {
            breakpoint: { max: 1200, min: 1024 },
            items: 2
        },
        tablet: {
          breakpoint: { max: 1023, min: 463 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <Container fluid id="HeroSection" className={styles.HeroSectionContainer}>
            <Row xs={1} sm={1} md={2} lg={2}>
                <Col >
                    <div className={styles.HeroSection + ' m-5 p-2'}>
                        <h2 className='mt-3'><FormattedMessage id='heroSection.title' defaultMessage="LUCBOL GLOBAL MANAGEMENT" /></h2>
                        <h1 className='mt-3'><FormattedMessage id='heroSection.subtitle' defaultMessage="CALL CENTER OUTSOURCING" /></h1>
                        <p className='mt-5'>
                            <FormattedMessage id='heroSection.description' defaultMessage="Lucbol Global Management BPO offers a full bilingual (English/Spanish) call center with a range of services to improve loan servicing, first party collections, account receivable, customer service, sales, enhance customer experience and grow brand loyalty. Lucbol Call Center work for your needs around the clock to support your business and stay competitive in today's market." />
                        </p>

                        <a href='#ContactUs'><Button className={styles.ButtonClass + ' p-3'}><FormattedMessage id='heroSection.contactUs' defaultMessage="Contact US!" /> <Icon.ArrowRight className={styles.IconHero}/></Button></a>
                        <div className={styles.OurPartnersContainer}>
                            <h3><FormattedMessage id='heroSection.ourPartner' defaultMessage="OUR PARTNERS" /></h3>
                            <Row className={styles.OurPartners}>
                                <Carousel   responsive={responsive}
                                            infinite={true}
                                            autoPlay={true}
                                            autoPlaySpeed={1500}
                                            customTransition="all .5"
                                            removeArrowOnDeviceType={["superLargeDesktop","desktop","laptop","tablet", "mobile"]}>
                                    <div><img src={Nubetel} alt='Nubetel' width="150" height="100" className="d-inline-block align-top"></img></div>
                                    <div><img src={Inc5000} alt='Inc5000' width="150" height="100" className="d-inline-block align-top"></img></div>
                                    <div><img src={ROK} alt='ROK' width="150" height="100" className="d-inline-block align-top"></img></div>
                                    <div><img src={CIT} alt='CIT' width="160" height="100" className="d-inline-block align-top"></img></div>
                                </Carousel>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className={styles.HeroSection + ' m-5 p-2'}></div>
                </Col>
            </Row>
        </Container>
      );
}