import Container from 'react-bootstrap/Container';
import styles from './Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LucbolLogo from './../assets/image/lucbol-logo.png';
// import BackgroundImage from './../assets/image/imagen-principal.png';

export default function Footer(){
    return (
        <Container fluid className={styles.FooterContainer + ' mx-auto'}>
            <Row>
                <Col sm={4}>
                    <img src={LucbolLogo} alt='Logo' className="d-inline-block align-top"></img>
                </Col>
                <Col sm={4}>
                    <Row>
                        Home
                    </Row>
                    <Row>
                        Home
                    </Row>
                    <Row>
                        Home
                    </Row>
                    <Row>
                        Home
                    </Row>
                    <Row>
                        Home
                    </Row>
                </Col>
                <Col sm={4}>
                    <Row>
                        Home
                    </Row>
                    <Row>
                        Home
                    </Row>
                    <Row>
                        Home
                    </Row>
                    <Row>
                        Home
                    </Row>
                </Col>
            </Row>
        </Container>
      );
}