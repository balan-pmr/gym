/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import { string } from 'prop-types';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const Footer = ({ copyright }) => (
      <Row gutter={40} style={{backgroundColor:'#45b39d',  textAlign:'right'}}  >
          <Col span={2}> 
          <img src='./assets/images/gym/gym.png' alt="Home Icon" style={{width:'40px', margin:'5px' }}  />  
          </Col>
          <Col span={10} style={{ textAlign:'left'}} > 
          <p style={{ fontStyle:'italic', fontSize:'15px'}} > made with love to Ale.  </p> 
          </Col>
          
      </Row>
);

Footer.propTypes = {
  copyright: string.isRequired
};

Footer.defaultProps ={
  copyright: process.env.REACT_APP_COPYRIGHT
};

export default Footer;
