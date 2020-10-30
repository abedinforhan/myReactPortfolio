import React from 'react';
import './Home.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import Experience from '../Experience/Experience';
import Typical from 'react-typical';
import Particles from 'react-particles-js';

const Home = () => {
  return (
    <div className="home">
      <div className="home__particle">
        <div className="home__imgContainer">
        </div>
        <div className='text-center'>
          <h2>Hi I am ,
          <h1>Mezbaul Abedin Forhan</h1>
          </h2>

          <Particles className='particle-canvas'
            params={{
              "particles": {
                "number": {
                  "value": 40,
                  "density": {
                    "enable": false
                  }
                },
                "color": {
                  "value": "#333456"
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "speed": 4,
                    "size_min": 0.3
                  }
                },
                "line_linked": {
                  "enable": false
                },
                "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "bottom",
                  "out_mode": "out"
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  }
                },
                "modes": {
                  "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                  },
                  "repulse": {
                    "distance": 400,
                    "duration": 4
                  }
                }
              }
            }} />

          <Typical className='text'
            loop={Infinity}
            wrapper="h1"
            steps={
              [
                'An aspiring MERN Stack Developer', 2000,
                'Success Coach at Clever programmer', 1000,
                'and a fast learner.', 600
              ]}

          />
        </div>
      </div>
      <SocialMedia />
      <Experience />
    </div>
  );
};

export default Home;