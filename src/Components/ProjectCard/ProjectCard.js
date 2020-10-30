import React from 'react';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProjectCard = ({ name, desc, imgUrl, liveUrl }) => {


  return (
    <Col md={4} className='projectCard'>
      <a className='text-decoration-none projectCard__link'
      href={liveUrl}>
        <Card className='my-3'>
          <CardImg top width="100%" src={imgUrl} alt={name} />
          <CardBody>
            <CardTitle>
              <h3>{name}</h3></CardTitle>
            <CardText >
              <h4 className="projectCard__subtitle">{desc}</h4>
            </CardText>
          </CardBody>
        </Card>
      </a>
    </Col>
  );
};

export default ProjectCard;