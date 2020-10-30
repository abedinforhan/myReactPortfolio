import React,{useState} from 'react';
import { Col } from 'reactstrap';
import './ProjectInResume.css';

const ProjectInResume = ({ name, desc, clientUrl, serverUrl, liveUrl, keyFeatures }) => {

  const [feturesData,setFeaturesData]=useState(keyFeatures.split('.'));
  console.log(feturesData);
  

  return (
    <>
      <Col md={4} className='my-4'>
        <h2 className='text-md-left'>{name}</h2>
        <p className='projectInResume__subtitle'> {desc}</p>

      </Col>
      <Col md={8} className='my-4'>
        <h4 className='projectInResume__links'>Project Code: 
          <a  href={clientUrl}>  Client Side |</a>
          <a href={serverUrl}>  Server Side |</a>
          <a href={liveUrl}>  Live site |</a>
        </h4>
        

        <ul className="projectInResume__keyfeaturs">
          {
            feturesData.map(data=><li>{data}</li>)
          }
        </ul>
      </Col>
    </>
  );
};

export default ProjectInResume;