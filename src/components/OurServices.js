import Container from 'react-bootstrap/Container';
import styles from './OurServices.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ITDevelopment from './../assets/image/ITDevelopment.png';
import B2CSALES from './../assets/image/B2CSALES.png';
import Loanservicing from './../assets/image/Loanservicing.png';
import ComplianceHotline from './../assets/image/compliance-hotline.png';

export default function OurServices(){
    return (
        <Container fluid className={styles.OurServiceContainer}>
            <div className={styles.OurServiceBrand + ' mx-auto'}>
                <h2>THE CALL CENTER INDUSTRY IS GROWING</h2>
                <p>Businesses are becoming increasingly aware of the need for market information and the desire to reduce customer turnover rates in a hard-hit economy. A significant trend in this industry is the growing number of clients who wish to outsource bilingual call centers in Latin America instead of developing such infrastructure in-house.</p>
                <div className={styles.OurServiceBrandText}><p>5.6% and 7% per year.</p></div>
            </div>
            <div id="OurServices" className={styles.OurServicesTitle}>
                <h3>TOP BENEFITS</h3>
                <h1>OUR SERVICES</h1>
                <p>We recruit, hire, equip, train and retain qualified staff for your business operation.</p>
            </div>
            <div className={styles.OurServicesCardsContainer}>
                <Row>
                    <Col>
                        <Card className={styles.OurServicesCard + " mx-auto"}>
                            <Card.Img variant="top" src={Loanservicing} />
                            <Card.Body className={styles.OurServicesCardBody}>
                                <Card.Title className={styles.OurServicesCardTitle}>CSR, Loan Servicing, First Party Collections</Card.Title>
                                <Card.Text className={styles.OurServicesCardText}>
                                Bilingual Customer Service, Loan Servicing Specialist and First party collection service designed to streamline your internal A/R efforts and credit policy.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={styles.OurServicesCard + " mx-auto"}>
                            <Card.Img variant="top" src={B2CSALES} />
                            <Card.Body className={styles.OurServicesCardBody}>
                                <Card.Title className={styles.OurServicesCardTitle}>B2C & B2B Sales</Card.Title>
                                <Card.Text className={styles.OurServicesCardText}>
                                Outbound/Inbound bilingual sales reps and technical support. B2B bilingual sales team to plug into your existing operation and help you grow your sales pipeline.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={styles.OurServicesCard + " mx-auto"}>
                            <Card.Img variant="top" src={ComplianceHotline} />
                            <Card.Body className={styles.OurServicesCardBody}>
                                <Card.Title className={styles.OurServicesCardTitle}>Compliance Hotline</Card.Title>
                                <Card.Text className={styles.OurServicesCardText}>
                                Monitor your business in a safe and anonymous way to make sure your employees feel heard when they give feedback. Reduce your organizational risk and track employees' issues.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={styles.OurServicesCard + " mx-auto"}>
                            <Card.Img variant="top" src={ITDevelopment} />
                            <Card.Body className={styles.OurServicesCardBody}>
                                <Card.Title className={styles.OurServicesCardTitle}>IT & Development</Card.Title>
                                <Card.Text className={styles.OurServicesCardText}>
                                Software Developers, Web and App designers, UX/UI, Marketing,  IT and Tech Support Specialists, Database, Cloud services and cyber security.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                </Row>
            </div>            
        </Container>
      );
}