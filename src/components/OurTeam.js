import Container from 'react-bootstrap/Container';
import styles from './OurTeam.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LuisImage from './../assets/image/luccani-prueba-image.jpeg';
import JaimeImage from './../assets/image/jaime-bolagay2edit1.jpeg';
import Card from 'react-bootstrap/Card';
import {FormattedMessage} from 'react-intl';
import LinkedinLogo from './../assets/image/linkedin-logo.png';

export default function OurTeam(){
    return (
        <Container fluid id="OurTeam" className={styles.OurTeamContainer}>
            <Row className={styles.OurTeamTitle + ' justify-content-center align-items-center text-center pt-5'} >
                <h2 className=''><FormattedMessage id='ourTeam.title' defaultMessage="MEET US" /></h2>
                <h1 className='mt-2'><FormattedMessage id='ourTeam.subtitle' defaultMessage="OUR TEAM" /></h1>
                <p className='w-75 mt-2'>
                    <FormattedMessage id='ourTeam.description' defaultMessage="We are registered in the state of Florida with a total of 45+ years of combined experience in the Call Center industry. We have created a highly group of customer relations specialists with all the qualifications and experience necessary to exceed in the Call Center industry. The company has its main offices in Tampa, Florida and Medellin, Colombia." />
                </p>
            </Row>
            <Row xs={1} sm={1} md={2} className={styles.OurTeamCardsContainer + ' p-5 text-center'}>
                <Col>
                    <Card className={styles.OurTeamCard + " mx-auto"}>
                        <Card.Img variant="top" src={LuisImage} className={styles.OurTeamCardImg + ' rounded-circle'} alt='Luis Luccani - Founder of Lucbol Global Management'/>
                        <Card.Body className={styles.OurTeamCardBody}>
                            <Card.Title className={styles.OurTeamCardTitle}>Mr. Luis Luccani</Card.Title>
                            <Card.Text className={styles.OurTeamCardText + ' text-center'}> <FormattedMessage id='ourTeam.luisTitle' defaultMessage="CEO of Vine" />  <a href="https://www.linkedin.com/in/luis-luccani-58b91b34" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt='LinkedIn' className={styles.OurTeamCardLogo + ' d-inline-block align-top'} width='20' height='20'></img></a></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.OurTeamCard + " mx-auto"}>
                        <Card.Img variant="top" src={JaimeImage} className={styles.OurTeamCardImg + ' rounded-circle'} alt='Jaime Bolagay - Founder of Lucbol Global Management'/>
                        <Card.Body className={styles.OurTeamCardBody}>
                            <Card.Title className={styles.OurTeamCardTitle}>Mr. Jaime Bolagay</Card.Title>
                            <Card.Text className={styles.OurTeamCardText + ' text-center'}> <FormattedMessage id='ourTeam.jaimeTitle' defaultMessage="Top Manager" />  <a href="https://www.linkedin.com/in/jaime-bolagay-26ba51190" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt='LinkedIn' className={styles.OurTeamCardLogo + ' d-inline-block align-top'} width='20' height='20'></img></a></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>   
            </Row>
        </Container>
      );
}