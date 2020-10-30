import React from 'react';
import './Experience.css'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';

const Experience = () => {
  return (
    <section className="experience">
      <div className='experience__title py-5'>
        <h1>Technical Skills</h1>
        <h3 >Specialist in need. Generalist at heart.</h3>
      </div>
      <Container>
        <Row>
          <Col md={4}>
            <div className="experience__skills">
              <h3><i className="fa fa-laptop fa-2x" aria-hidden="true"></i></h3>
              <h3>Front-end</h3>
              <ul>
                <li>html(5)</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Chart Js</li>
                <li>Moment Js</li>
                <li>Firebase Auth</li>
                <li>JWT Token</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Api</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="experience__skills">
              <h3><i className=" fa fa-database fa-2x" aria-hidden="true"></i></h3>
              <h3>Back-end</h3>
              <ul>
                <li>NodeJs</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="experience__skills">
            <h3><i className=" fa fa-star fa-2x" aria-hidden="true"></i></h3>
              <h3>Tools</h3>
              <ul>
                <li>VS Code</li>
                <li>NPM</li>
                <li>Git & GitHub</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Footer/>
      </Container>
    </section>
  );
};

export default Experience;