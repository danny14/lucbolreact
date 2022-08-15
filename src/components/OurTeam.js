import Container from 'react-bootstrap/Container';
import styles from './OurTeam.module.css';
/*import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';*/
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
//import LuisImage from './../assets/image/Luis-Luccani-image.jpeg';
import LuisImage from './../assets/image/luccani-prueba-image.jpeg';
import JaimeImage from './../assets/image/Jaime-Bolagay-image.png';

export default function OurTeam(){
    return (
        <Container fluid id="OurTeam" className={styles.OurTeamContainer}>
            <div className={styles.OurTeamTitle}>
                <h3>MEET US</h3>
                <h1>OUR TEAM</h1>
                <p>We are located in the state of Florida. We have more than 45+ years of combined experience with the Call Center industry. We have created a highly group of customer
                   relations, full of specialists with the qualifications and experience necessary to suceed in the Call Center industry. The company has its main offices in Tampa, 
                   Florida and Medellin, Colombia.
                </p>
            </div>
            <div className={styles.OurTeamFigureContainer}>
                <Row >
                    <Col>
                        <Figure className={styles.OurTeamFigure + " d-flex justify-content-around"}>
                            <Figure.Image  src={LuisImage} alt="Mr. Luis Luccani - CEO of Vine" />
                            <Figure.Caption className={styles.OurTeamReference}>
                                <h5>Mr. Luis Luccani</h5>
                                <p>CEO of Vine</p>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure className={styles.OurTeamFigure + " d-flex justify-content-around"}>
                            <Figure.Image src={JaimeImage} alt="Mr. Jaime Bolagay - Top Manager" />
                            <Figure.Caption className={styles.OurTeamReference}>
                                <h5>Mr. Jaime Bolagay</h5>
                                <p>Top Manager</p>
                            </Figure.Caption>
                        </Figure>
                    </Col>    
                </Row>
            </div>            
        </Container>
      );
}