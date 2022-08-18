import Container from 'react-bootstrap/Container';
import styles from './Reviews.module.css';
import ImageBrand from './../assets/image/call-center-agent.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import Testimonials from './Testimonials'

export default function Reviews(){
    return (
        <>
        <Container fluid id="Testimonials" className={styles.ReviewsContainer}>
            <div className={styles.ReviewsTitle}>
                <h3>TESTIMONIALS</h3>
                <h1>REVIEW FROM CLIENTS</h1>
                <p>
                    Our goal is to provide the best customer experience for your customers. We match your company's style with a dedicated team of agents specialized in your sector 
                    to represent your brand mission and values. You will be proud to have our team on board.
                </p>
            </div>
            <Testimonials></Testimonials>
        </Container>
        <Container fluid className={styles.ReviewsBrandContainer + ' my-4'}>
            <div className={styles.ReviewsBrand}>
                <Row className='justify-content-center align-items-center'>
                    <Col>
                        <img src={ImageBrand} alt='Our Services' className="d-inline-block align-middle img-fluid"></img>
                    </Col>
                    <Col className='d-flex justify-content-center text-center flex-column'>
                        <Row><h4>Now is the time to successfully improve your brand's customer service experience, take action today to maximize on your long-term market benefits!</h4></Row>
                        <Row><a href='#ContactUs'><Button className={styles.ButtonClass}>Contact US <Icon.Telephone className={styles.ButtonRotate}/></Button></a></Row>
                    </Col>      
                </Row>
            </div>
        </Container></>
      );
}