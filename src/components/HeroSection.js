import Container from 'react-bootstrap/Container';
import styles from './HeroSection.modulo.css';
import BackgroundImage from './../assets/image/imagen-principal.png';

export default function HeroSection(){
    return (
        <Container className={styles.HeroSection} style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
            </p>
        </Container>
      );
}