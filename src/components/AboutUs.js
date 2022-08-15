import Container from 'react-bootstrap/Container';
import styles from './AboutUs.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MissionImage from './../assets/image/mission-image-pink.png';
import ExperienceImage from './../assets/image/experience-image-pink.png';
import PricesImage from './../assets/image/prices-image-pink.png';

export default function AboutUs(){
    return (
        <Container fluid id ="AboutUs" className={styles.AboutUsContainer}>
            <div className={styles.AboutUsTitle}>
                <h3>WHY TO CHOOSE US?</h3>
                <h1>ABOUT US</h1>
                <p>Customer experience, analytics, planning and quality control, everything you need to manage your Call Center in a single platform.</p>
            </div>
            <div className={styles.AboutUsCardsContainer}>
                <Row >
                    <Col>
                        <img src={MissionImage} alt='Our Mission' width="10" height="20" className="d-inline-block align-top"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}>Our Mission</Card.Title>
                                <Card.Text className={styles.AboutUsCardText}>
                                    It is the mission of Lucbol Global Management to provide clients with top quality outsourcing call center services. We have a deep understanding 
                                    of the US and Hispanic market helping businesses turn customer interactions into revenue opportunities. No matter the call volume, 
                                    Lucbol Outsourcing service provides our clients with the greatest chance of communicating with their end customers. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src={ExperienceImage} alt='Experience' width="10" height="20" className="d-inline-block align-top"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}>Experience</Card.Title>
                                <Card.Text className={styles.AboutUsCardText}>
                                    Our executives have worked with renowned USA brands such as JPMorgan Chase, TCF Bank, WFS Financial, Barnett Bank, U.S. Small Business 
                                    Administration and Coca Cola Refreshments. We have a dedicated and well-trained team of customer support specialists who are able to consistently 
                                    provide excellent services delivered in a timely and cost-effective manner. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>  
                    <Col>
                        <img src={PricesImage} alt='Good Prices' width="10" height="20" className="d-inline-block align-top"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}>Good Prices</Card.Title>
                                <Card.Text className={styles.AboutUsCardText}>
                                    Outsourcing your brand with us, can ensure the growth and profitability of your businesses with an average of 40%-50% cost savings compared to US 
                                    call centers. Our integrated model and proactive approach provide Inbound and Outbound services adapted to your needs at competitive cost. There's 
                                    no need for costly hiring and training planning, our structure strategically adds associates to meet your demand.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                </Row>
            </div>            
        </Container>
      );
}