import React from 'react';
import { Col } from 'react-bootstrap';

const AboutUs = ({ title, description, imgUrl}) => {
  return (
    <Col size={12} sm={6} md={6}>
         
        <div className="about-imgbx">
        <img src={imgUrl} />
        
        <div className="about-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>        
      </div>
      </Col>
 
  );
};

export default AboutUs;
