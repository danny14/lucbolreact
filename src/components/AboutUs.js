import Container from 'react-bootstrap/Container';
import styles from './AboutUs.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MissionImage from './../assets/image/mission-image-pink.webp';
import ExperienceImage from './../assets/image/experience-image-pink.webp';
import PricesImage from './../assets/image/prices-image-pink.webp';
import {FormattedMessage} from 'react-intl';

export default function AboutUs(){
    return (
        <Container fluid id ="AboutUs" className={styles.AboutUsContainer}>
            <div className={styles.AboutUsTitle + ' mt-5'}>
                <h2 className='mt-5'><FormattedMessage id='aboutUs.title' defaultMessage="WHY TO CHOOSE US?" /></h2>
                <h1 className='mt-3'><FormattedMessage id='aboutUs.subtitle' defaultMessage="ABOUT US" /></h1>
                <p className='mt-3'><FormattedMessage id='aboutUs.description' defaultMessage="Customer experience, analytics, planning and quality control, everything you need to manage your Call Center in a single platform." /></p>
            </div>
            <div className={styles.AboutUsCardsContainer + ' pt-2 pb-5'}>
                <Row xs={1} sm={1} md={1} lg={3}>
                    <Col>
                        <img src={MissionImage} alt='Mission of Lucbol Global Management'  className="d-inline-block align-top img-fluid img-thumbnail mt-2"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}><FormattedMessage id='aboutUs.mission' defaultMessage="OUR MISSION" /></Card.Title>
                                <Card.Text className={styles.AboutUsCardText + ' p-3'}>
                                    <FormattedMessage id='aboutUs.missiondescription' defaultMessage="It is the mission of Lucbol Global Management to provide clients with top quality outsourcing call center services. We have a deep understanding of the US and Hispanic market helping businesses turn customer interactions into revenue opportunities. No matter the call volume, Lucbol Outsourcing service provides our clients with the greatest chance of communicating with their end customers." />                                   
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src={ExperienceImage} alt='Experience of Lucbol Global Management' className="d-inline-block align-top img-fluid img-thumbnail mt-2"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}><FormattedMessage id='aboutUs.experience' defaultMessage="EXPERIENCE" /></Card.Title>
                                <Card.Text className={styles.AboutUsCardText + ' p-3'}>
                                    <FormattedMessage id='aboutUs.experiencedescription' defaultMessage="Our executives have worked with renowned USA brands such as JPMorgan Chase, TCF Bank, WFS Financial, Barnett Bank, U.S. Small Business Administration and Coca Cola Refreshments. We have a dedicated and well-trained team of customer support specialists who are able to consistently provide excellent services delivered in a timely and cost-effective manner." />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>  
                    <Col>
                        <img src={PricesImage} alt='Good Prices of Lucbol Global Management' className="d-inline-block align-top img-fluid img-thumbnail mt-2"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}><FormattedMessage id='aboutUs.prices' defaultMessage="COST EFFECTIVENESS" /></Card.Title>
                                <Card.Text className={styles.AboutUsCardText + ' p-3'}>
                                    <FormattedMessage id='aboutUs.pricesdescription' defaultMessage="Outsourcing your brand with us, can ensure the growth and profitability of your businesses with an average of 40%-50% cost savings compared to US call centers. Our integrated model and proactive approach provide Inbound and Outbound services adapted to your needs at competitive cost. There's no need for costly hiring and training planning, our structure strategically adds associates to meet your demand." />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                </Row>
            </div>            
        </Container>
      );
}