import Container from 'react-bootstrap/Container';
import styles from './Reviews.module.css';
import Carousel from 'react-bootstrap/Carousel';
import PersonalImage from './../assets/image/personal-image.png';


export default function Reviews(){
    return (
        <Container className={styles.ReviewsContainer}>
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
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PersonalImage}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PersonalImage}
                        alt="Third slide"
                        />
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
      );
}