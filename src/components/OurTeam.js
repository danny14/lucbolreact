import Container from 'react-bootstrap/Container';
import styles from './OurTeam.module.css';
/*import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';*/
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import PersonalImage from './../assets/image/personal-image.png';

export default function OurTeam(){
    return (
        <Container className={styles.OurteamContainer}>
            <div className={styles.OurTeamTitle}>
                <h3>MEET US</h3>
                <h1>OUR TEAM</h1>
                <p>We are located in the state of Florida. We have more than 45+ years of combined experience with the Call Center industry. We have created a highly group of customer
                   relations, full of specialists with the qualifications and experience necessary to suceed in the Call Center industry. The company has its main offices in Tampa, 
                   Florida and Medellin, Colombia.
                </p>
            </div>
            <div className={styles.OurteamFigureContainer}>
                <Row >
                    <Col>
                        <Figure className={styles.OurteamFigure + " d-flex justify-content-around align-items-end"}>
                            <Figure.Image  src={PersonalImage} alt="171x180"  />
                            <Figure.Caption className={styles.OurTeamReference}>
                                <h5>Mr. Luis Luccani</h5>
                                <p>CEO of Vine</p>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure className={styles.OurteamFigure + " d-flex justify-content-around align-items-end"}>
                            <Figure.Image src={PersonalImage} alt="171x180"  />
                            <Figure.Caption className={styles.OurTeamReference}>
                                <h5>Prueba</h5>
                                <p>CEO of Vine</p>
                            </Figure.Caption>
                        </Figure>
                    </Col>    
                </Row>
            </div>            
        </Container>
      );
}