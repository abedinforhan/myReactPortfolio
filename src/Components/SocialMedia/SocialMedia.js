import React from 'react';
import { Button } from 'reactstrap';
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className="socialMedia mb-5">
    
     <Button outline color="danger">
     <a className='resume__Btn text-decoration-none text-dark' href="https://drive.google.com/file/d/1hYIo3oQ0xvx_MZXBcT3yRqSKFBbQw8rL/view?usp=sharing" download>Download Resume</a>
      </Button>
     
      <h2>Want to Connect ?</h2>
      <div className="socialMedia__icon">
        <a href="https://github.com/abedinforhan">
          <i className="fa fa-github-alt fa-2x mx-3"></i>
        </a>
        <a href='https://www.facebook.com/mezbaul.abedin.5/'>
          <i className="fa fa-facebook fa-2x mx-3"></i>
        </a>
        <a href='https://www.instagram.com/osthir__dev/'>
          <i className="fa fa-instagram fa-2x mx-3"></i>
        </a>
        <a href='https://www.linkedin.com/in/mezbaul-abedin-forhan-59b7001b7/'>
          <i className="fa fa-linkedin fa-2x mx-3"></i>
        </a>
       
      </div>
    </div>
  );
};

export default SocialMedia;