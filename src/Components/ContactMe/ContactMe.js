import React from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const ContactMe = () => {

   

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('91221', 'template_d0qvuok', e.target, 'user_F9IwvjFRmcdQVKcNmOToa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div className='contact pt-5'>

      <Container className='contact__container'>

        <Row className='pt-5'>
          <Col md={{ size: 6, offset: 1 }} sm={{ size: 'auto' }} lg={10}>
            <h2><i className="fa fa-envelope fa-3x " aria-hidden="true"></i></h2>
            <Form onSubmit={sendEmail}>
              <FormGroup className='mt-3'>
                <Label className='contact__infoLabel' for="name">Name:</Label>
                <Input type="text" name="password" id="examplePassword" placeholder="Enter Your Name" />
              </FormGroup>
              <FormGroup className='mt-3'>
                <Label className='contact__infoLabel' for="email">Email: </Label>
                <Input type="email" name="email" id="email" placeholder="Enter Your Email" />
              </FormGroup>
              <FormGroup className='mt-3'>
                <Label className='contact__infoLabel' for="subject">Subject</Label>
                <Input type="text" name="subject" id="subject" placeholder="Enter Subject" />
              </FormGroup>
              <FormGroup className='mt-3'>
                <Label className='contact__infoLabel' for="message">Message</Label>
                <Input style={{height:'8rem'}} type="textarea" name="message" id="message" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
          <Col md={{ size: 4, offset: 1 }} sm={12} className='text-center'>
            <div className="contact__info pb-5">
              <span>Address and Phone :</span>
              <br />
              <span className="contact__icons">
                <i className="fa fa-male fa-2 fa-2x mx-3" aria-hidden="true"></i>
                <i className="fa fa-address-card fa-2 fa-2x mx-3" aria-hidden="true"></i>
                <i className="fa fa-mobile fa-2 fa-2x mx-3" aria-hidden="true"></i>
              </span>
              <span>Mezbaul Abedin Forhan</span>
              <span>Rahaman Nagar Residential Area
            </span>
              <span>4000,Chittagong</span>
              <span>Bangladesh</span>
              <span>+8801720811347
            </span>
            </div>
           </Col>
        </Row>
         
      </Container>
    </div>

  );
};

export default ContactMe;