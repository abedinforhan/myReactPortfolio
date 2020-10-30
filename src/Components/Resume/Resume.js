import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { resumeProjectData } from '../../resumeProjectData';
import Footer from '../Footer/Footer';
import ProjectInResume from '../ProjectInResume/ProjectInResume';
import './resume.css'

const Resume = () => {

  const [data, setData] = useState(resumeProjectData)
  return (
    <div className='resume'>
      <Container className='resume py-5'>
        <Row>
          <Col md={6}>
            <h1>Mezbaul Abedin Forhan</h1>
            <h4>Mern Stack Deceloper</h4>
            <h4>Email:abedinforhan@gmail.com</h4>
            <h4>Mobile: +8801720811347</h4>
            <a href="https://github.com/abedinforhan">
              <i className="fa fa-github-alt fa-2x mr-2"></i>
            </a>
            <a href='https://www.facebook.com/mezbaul.abedin.5/'>
              <i className="fa fa-facebook fa-2x mr-3"></i>
            </a>
            <a href='https://www.instagram.com/osthir__dev/'>
              <i className="fa fa-instagram fa-2x mr-3"></i>
            </a>
            <a href='https://www.linkedin.com/in/mezbaul-abedin-forhan-59b7001b7/'>
              <i className="fa fa-linkedin fa-2x mr-3"></i>
            </a>
            <br />
            <br />
          </Col>
          <Col md={6} className='my-4'>

          </Col>
          <Col md={4} className='my-4'>
            <h2 className='text-md-left'>PROJECT EXPERIENCE:</h2>
            <hr/>
          </Col>
          <Col md={8} className='my-5'>
            <h2></h2>
          <hr />
          </Col>
         
          {
            data.map(data =>
              <ProjectInResume
                name={data.name}
                desc={data.desc}
                clientUrl={data.clientUrl}
                serverUrl={data.serverUrl}
                liveUrl={data.liveUrl}
                keyFeatures={data.keyFeatures}
              />)
          }
          <Col md={4} className='my-4'>
            <hr/>
            <h2 >EDUCATION :</h2>
          </Col>
          <Col md={8} className='Resume__Info my-4' >
          <hr/>
            <h4> Bachelor of Computer Science and Engineering</h4>
            <h3>at Chittagong Indepent University</
            h3>
            <p className="Resume__date">
              Sep'2016-Present
          </p>
            <br />
            <h4>Higher Secondary Certificate</h4>
            <h3> Govt City College, Chiitagong</h3>
            <p className='Resume__date'>
              Jun'2013-Apr'2015
          </p>
          </Col>
          <Col md={4} className='my-4'>
          <hr/>
           <h2>COMPLETED COURSES:</h2>
          </Col>
          <Col md={8} className='Resume__Info my-4'>
           <hr/>
            <h4>Complete web Development</h4>
            <h3>By Jahnakar Mahabub</h3>
            <p className="Resume_date">Sep'2020-Nov'2020</p>
            <br/>
            <h4>Profit with Javascript</h4>
            <h3>By Clever Programmer</h3>
            <p className="Resume_date">Jun'2020-Oct'2020</p>

          </Col>
          <Col md={4} className='my-4'>
          <hr/>
            <h2> ADDITIONAL SKILLS</h2>
          </Col>
          <Col md={8} className='ProjectInResume_addSkills my-4'>
          <hr/>
            <ul>
              <li>Problem Solving Ability</li>
              <li>Highly Organized</li>
              <li>Excellent time management, ability to work independently, and ability to work
            well with others</li>
            </ul>
          </Col>
          </Row>
        <br />
        <Footer/>
    </Container>
    </div>
  );
};

export default Resume;