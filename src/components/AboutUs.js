import Container from 'react-bootstrap/Container';
import styles from './AboutUs.module.css';
/*import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';*/
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MissionImage from './../assets/image/mission-image-pink.png';
import ExperienceImage from './../assets/image/experience-image-pink.png';
import PricesImage from './../assets/image/prices-image-pink.png';

export default function AboutUs(){
    return (
        <Container className={styles.AboutUsContainer}>
            <div className={styles.AboutUsTitle}>
                <h3>WHY TO CHOOSE US?</h3>
                <h1>ABOUT US</h1>
                <p>Analytics and Planning for Call Centers, everything you need to manage your Call Center, in a single platform.</p>
            </div>
            <div className={styles.AboutUsCardsContainer}>
                <Row >
                    <Col>
                        <img src={MissionImage} alt='Our Mission' width="10" height="20" className="d-inline-block align-top"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}>Our Mission</Card.Title>
                                <Card.Text className={styles.AboutUsCardText}>
                                    To provide top quality call center services to our clients with our outsourcing program. We work to help companies comunicate with their end customers.
                                    We do B2B, B2C Sales, Customer Service, Loan Servicing and First Party Collection Services, including both inbound and outbound calls.
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
                                    Our  executives have worked with renowned USA brands such as JPMorgan Chase, TCF Bank, WFS Financial, Barnett Bank, U.S. Small Business Administration,
                                    and Coca Cola Refreshments. We are a dedicated and well-trained team of customer support specialists, able to consistently provide excellent services.
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
                                    Lucbol Global Management Outsourcing offers a First Party collection service, designed to speed up your internal efforts. We contact your customers as 
                                    representatives of your company, not as a third-party collection agency. Our First Party program result in a higher number of contacts ending in more sales 
                                    and better user experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                </Row>
            </div>            
        </Container>
      );
}