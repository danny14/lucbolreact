import Container from 'react-bootstrap/Container';
import styles from './AboutUs.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MissionImage from './../assets/image/mission-image-pink.png';
import ExperienceImage from './../assets/image/experience-image-pink.png';
import PricesImage from './../assets/image/prices-image-pink.png';
import {FormattedMessage} from 'react-intl';


export default function AboutUs(){
    return (
        <Container fluid id ="AboutUs" className={styles.AboutUsContainer}>
            <div className={styles.AboutUsTitle + ' mt-5'}>
                <h3 className='mt-5'><FormattedMessage id='aboutUsSection.subtitle' defaultMessage='WHY TO CHOOSE US?'/></h3>
                <h1 className='mt-3'><FormattedMessage id='aboutUsSection.title' defaultMessage='ABOUT US'/></h1>
                <p className='mt-3'><FormattedMessage id='aboutUsSection.description' defaultMessage='Analytics and Planning for Call Centers, everything you need to manage your Call Center, in a single platform.'/></p>
            </div>
            <div className={styles.AboutUsCardsContainer + ' pt-2 pb-5'}>
                <Row >
                    <Col>
                        <img src={MissionImage} alt='Our Mission'  className="d-inline-block align-top img-fluid img-thumbnail"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}><FormattedMessage id='aboutUsSection.cardFirstTitle' defaultMessage='Our Mission'/></Card.Title>
                                <Card.Text className={styles.AboutUsCardText + ' p-3'}>
                                <FormattedMessage 
                                    id='aboutUsSection.cardFirstDescription' 
                                    defaultMessage='To provide top quality call center services to our clients with our outsourcing program. We work to help companies comunicate with their end customers.
                                    We do B2B, B2C Sales, Customer Service, Loan Servicing and First Party Collection Services, including both inbound and outbound calls.'
                                />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src={ExperienceImage} alt='Experience' className="d-inline-block align-top img-fluid img-thumbnail"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}><FormattedMessage id='aboutUsSection.cardSecondTitle' defaultMessage='Experience'/></Card.Title>
                                <Card.Text className={styles.AboutUsCardText + ' p-3'}>
                                <FormattedMessage 
                                    id='aboutUsSection.cardSecondDescription' 
                                    defaultMessage='Our executives have worked with renowned USA brands such as JPMorgan Chase, TCF Bank, WFS Financial, Barnett Bank, U.S. Small Business Administration,
                                    and Coca Cola Refreshments. We are a dedicated and well-trained team of customer support specialists, able to consistently provide excellent services. this is  a PoC'/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>  
                    <Col>
                        <img src={PricesImage} alt='Good Prices' className="d-inline-block align-top img-fluid img-thumbnail"></img>
                        <Card className={styles.AboutUsCard + " mx-auto"}>
                            <Card.Body>
                                <Card.Title className={styles.AboutUsCardTitle}><FormattedMessage id='aboutUsSection.cardThirdTitle' defaultMessage='Good Prices'/></Card.Title>
                                <Card.Text className={styles.AboutUsCardText + ' p-3'}>
                                <FormattedMessage 
                                    id='aboutUsSection.cardThirdDescription' 
                                    defaultMessage='We offer a First Party collection service, designed to speed up your internal efforts. We contact your customers as 
                                    representatives of your company, not as a third-party collection agency. Our First Party program result in a higher number of contacts ending in more sales 
                                    and better user experience.'
                                />
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                </Row>
            </div>            
        </Container>
      );
}