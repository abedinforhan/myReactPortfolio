import React from 'react';
import './Blog.css';
import { Wave} from 'react-animated-text';


const Blog = () => {
  const exampleStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1em',
    padding: '2em 1em 1em 1em',
    width: '80%',
    fontSize: '2.5rem',
  };

  
  return (
    <div style={exampleStyle}>
    <Wave text="Comming Soon... " effect="stretch" effectChange={2.0} />
    <i class="fa fa-smile-o" aria-hidden="true"></i>
    <br/>
  </div>
  );
};

export default Blog;