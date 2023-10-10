import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './Form.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import {FormattedMessage, useIntl} from 'react-intl'

export default function Forms(){
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState('');
    const [info, setInfo] = useState('');
    const intl = useIntl();
    const nameDescription = intl.messages["form.nameDescription"];
    const nameValidation = intl.messages["form.nameRequired"];
    const emailDescription = intl.messages["form.emailDescription"]; 
    const messageDescription = intl.messages["form.messageDescription"];
    const checkValidation = intl.messages["form.checkValidation"];
    const alertInfo = intl.messages["form.alertInfo"];
    const alertSuccess = intl.messages["form.alertSuccess"]; 
    const alertDanger = intl.messages["form.alertDanger"]; 

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(event.target)
        if (form.checkValidity() === false) {
            event.preventDefault();
            setShow(true);
            setVariant('info');
            setInfo(alertInfo);
            event.stopPropagation();
        }else{
            setValidated(true);
            event.preventDefault();

            emailjs.sendForm('service_ccd3anb','template_qc6nqis',event.target,'PBR6SjTHIzmjl8Dgg')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                setShow(true);
                setVariant('success');
                setInfo(alertSuccess);
            }, function(error) {
                console.log('FAILED...', error);
                setShow(true);
                setVariant('danger');
                setInfo(alertDanger);
            });
        }

        setValidated(true);
    };

    return (
        <Container fluid id="ContactUs" className={styles.FormContainer}>
            <div className={styles.FormTitle }>
                <Row className='m-5'>
                    <Col sm={6}>
                        <h2><FormattedMessage id='form.title' defaultMessage="CONTACT US" /></h2>
                        <h1><FormattedMessage id='form.subtitle' defaultMessage="Send Us a Message" /></h1>
                        <Row>
                            <Col className="ps-4">
                                <Row className="fw-bold">Call us at:</Row>
                                <Row>(US) +1 727 253 2003</Row>
                                <Row>(US) +1 813 381 9998</Row>
                            </Col>                        
                        </Row>
                        <Row >
                            <Col className="ps-4">
                            <Row className="fw-bold">Email us at:</Row>
                            <Row>info@lucbol.com</Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Form className={styles.FormStructure} noValidate validated={validated} onSubmit={handleSubmit}>
                            <Alert show={show} variant={variant} dismissible onClick={() => setShow(false)}>{info}</Alert>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label><FormattedMessage id='form.name' defaultMessage="Full Name" /></Form.Label>
                                <Form.Control name='form_name' required type="text" placeholder={nameDescription} feedback={nameValidation} />
                                <Form.Control.Feedback type="invalid">
                                    <FormattedMessage id='form.nameRequired' defaultMessage="Full Name is a required field." />                                    
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label><FormattedMessage id='form.email' defaultMessage="Email" /></Form.Label>
                                <Form.Control name='form_email' required type="email" placeholder={emailDescription}/>
                                <Form.Control.Feedback type="invalid">
                                    <FormattedMessage id='form.emailRequired' defaultMessage="Please choose a valid email." />                                    
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label><FormattedMessage id='form.message' defaultMessage="Message" /></Form.Label>
                                <Form.Control name='form_message' as="textarea" rows={2} placeholder={messageDescription}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formTerms">
                                <Row >
                                    <Col>
                                        <Form.Check type="checkbox" required label={<FormattedMessage id='form.check' defaultMessage="Accept terms & conditions" />} feedback={checkValidation} feedbackType='invalid'/>
                                    </Col>
                                    <Col>
                                        <Button variant="primary" type="submit" className={styles.ButtonForm}><FormattedMessage id='form.send' defaultMessage="Send" /> <Icon.ArrowRight className={styles.IconForm}/></Button>
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
