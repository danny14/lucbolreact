import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './Form.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

export default function Forms(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid id="ContactUs" className={styles.FormContainer}>
            <div className={styles.FormTitle}>
                <Row>
                    <Col sm={6}>
                    <h3>CONTACT US</h3>
                    <h1>Send Us a Message</h1>
                    <Row>
                        Phone
                    </Row>
                    <Row>
                        Email
                    </Row>
                    </Col>
                    <Col sm={5}>
                        <Form className={styles.FormStructure} noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control required type="text" placeholder="Full Name" feedback="Full Name is a required field." />
                                <Form.Control.Feedback type="invalid">
                                    Full Name is a required field.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="name@example.com"/>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={2} placeholder="(Optional)"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formTerms">
                                <Row >
                                    <Col>
                                        <Form.Check type="checkbox" required label="Accept terms & conditions" feedback="You must agree before submitting." />
                                    </Col>
                                    <Col>
                                        <Button variant="primary" type="submit">Send <Icon.ArrowRight className={styles.IconForm}/></Button>
                                    </Col>
                                </Row>                                 
                            </Form.Group>                            
                        </Form>
                    </Col>      
                </Row>
            </div>
        </Container>
      );
}