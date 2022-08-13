import Container from 'react-bootstrap/Container';
import styles from './Reviews.module.css';
import Carousel from 'react-bootstrap/Carousel';
import PersonalImage from './../assets/image/personal-image.png';
import ImageBrand from './../assets/image/call-center-agent.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

export default function Reviews(){
    return (
        <><Container className={styles.ReviewsContainer}>
            <div className={styles.ReviewsTitle}>
                <h3>TESTIMONIALS</h3>
                <h1>REVIEW FROM CLIENTS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className={styles.ReviewsFigureContainer}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={PersonalImage}
                            alt="First slide" />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={PersonalImage}
                            alt="Second slide" />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={PersonalImage}
                            alt="Third slide" />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
        <Container className={styles.ReviewsBrandContainer}>
            <div className={styles.ReviewsBrand}>
                <Row >
                    <Col>
                        <img src={ImageBrand} alt='Our Services' className="d-inline-block align-middle"></img>
                    </Col>
                    <Col>
                        <h4>Now is the time to successfully improve your brand's customer service experience, take action today to maximize on your long-term market benefits!</h4>
                        <Button className={styles.ButtonClass}>Contact US <Icon.Telephone className={styles.ButtonRotate}/></Button>
                    </Col>      
                </Row>
            </div>
        </Container></>
      );
}