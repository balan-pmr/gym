/**
 * 
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const Home = () => (
    <div>
        <Row gutter={4}>
            <Col span={12} >
                Home content goes here <br/>
            </Col>
        </Row>
    </div>
);


export default Home;