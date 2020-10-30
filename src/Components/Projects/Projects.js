import React,{useState} from 'react';
import { Container, Row } from 'reactstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectData } from '../../ProjectData';

import './Projects.css'
import Footer from '../Footer/Footer';


const Projects = () => {
  const [data,setData]=useState(projectData);
  return (
    <div className="projects my-5">
      <Container>
        <div className="projects__heading">
        <h2 >Check out these Awesome Projects</h2>
        </div>
        <hr/>
        <Row >
          {
            data.map(data=> <ProjectCard
            name={data.name}
            desc={data.desc}
            imgUrl={data.imgUrl}
            liveUrl={data.liveUrl}
            />)
          }
        </Row>
        <hr></hr>
        <Footer/>
      </Container>
      
      
    </div>
  );
};

export default Projects;