/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Box from "../Generic/Box";
const References = (props) => {
    return (
        <div style={{}} >
            <Row >
                <Col span={12}>
                    <Box>
                        <h2>Body Fat Percentege</h2>
                        <table  style={{ width: '100%', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>-(Low)</th>
                                <th>0 (Normal)</th>
                                <th>+ (High)</th>
                                <th>++ (Very High)</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} >Female</td>
                                    <td><b>20-29</b></td>
                                    <td>&#60; 21.0</td>
                                    <td>21.0 - 32.9</td>
                                    <td>33.0 - 38.9</td>
                                    <td>&#62;&#61; 39.0</td>
                                </tr>
                                <tr>
                                     <td><b>40-59</b></td>
                                    <td>&#60; 23.0</td>
                                    <td>23.0 - 33.9</td>
                                    <td>34.0 - 39.9</td>
                                    <td>&#62;&#61; 40.0</td>
                                </tr>
                                <tr>
                                     <td><b>60-79</b></td>
                                    <td>&#60; 24.0</td>
                                    <td>24.0 - 35.9</td>
                                    <td>36.0 - 41.9</td>
                                    <td>&#62;&#61; 42.0</td>
                                </tr>                                
                            </tbody>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} >Male</td>
                                    <td><b>20-29</b></td>
                                    <td>&#60; 8.0</td>
                                    <td>8.0 - 19.9</td>
                                    <td>20.0 - 24.9</td>
                                    <td>&#62;&#61; 25.0</td>
                                </tr>
                                <tr>
                                     <td><b>40-59</b></td>
                                    <td>&#60; 11.0</td>
                                    <td>11.0 - 21.9</td>
                                    <td>22.0 - 27.9</td>
                                    <td>&#62;&#61; 28.0</td>
                                </tr>
                                <tr>
                                     <td><b>60-79</b></td>
                                    <td>&#60; 13.0</td>
                                    <td>13.0 - 24.9</td>
                                    <td>25.0 - 29.9</td>
                                    <td>&#62;&#61; 30.0</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </Box>
                </Col>
            </Row>



            <Row>
                <Col span={12} style={{ textAlign: 'left' }} >
                <Box>
                        <h2>Viceral Fat Level</h2>
                        <table  style={{ width: '100%', textAlign: 'center' }}>
                            <tr>
                                <th>Viceral Fat Level</th>
                                <th>Viceral Fat Level Classification</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td> &#60;&#61; 9 </td>
                                    <td>0 (Normal)</td>
                                </tr>
                                <tr>
                                    <td>10 - 14 </td>
                                    <td>+ (High) </td>
                                </tr>
                                <tr>
                                <td> &#62;&#61; 15 </td>
                                    <td>++(Very High)</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </Box>
                </Col>
            </Row>


            <Row >
                <Col span={12}>
                    <Box>
                        <h2>Skeletal Muscle Percentege </h2>
                        <table  style={{ width: '100%', textAlign: 'center' }}>
                            <tr>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>-(Low)</th>
                                <th>0 (Normal)</th>
                                <th>+ (High)</th>
                                <th>++ (Very High)</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} >Female</td>
                                    <td><b>18-34</b></td>
                                    <td>&#60; 24.3</td>
                                    <td>24.3 - 30.3</td>
                                    <td>30.4 - 35.3</td>
                                    <td>&#62;&#61; 35.4</td>
                                </tr>
                                <tr>
                                     <td><b>40-59</b></td>
                                    <td>&#60; 24.1</td>
                                    <td>24.1 - 30.1</td>
                                    <td>30.2 - 35.1</td>
                                    <td>&#62;&#61; 35.2</td>
                                </tr>
                                <tr>
                                     <td><b>60-80</b></td>
                                    <td>&#60; 23.9</td>
                                    <td>23.9 - 29.9</td>
                                    <td>30.0 - 34.9</td>
                                    <td>&#62;&#61; 35.0</td>
                                </tr>                                
                            </tbody>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} >Male</td>
                                    <td><b>18-39</b></td>
                                    <td>&#60; 33.3</td>
                                    <td>33.3 - 39.3</td>
                                    <td>39.4 - 44.0</td>
                                    <td>&#62;&#61; 44.1</td>
                                </tr>
                                <tr>
                                     <td><b>40-59</b></td>
                                    <td>&#60; 33.1</td>
                                    <td>33.1 - 39.1</td>
                                    <td>39.2 - 43.8</td>
                                    <td>&#62;&#61; 43.9</td>
                                </tr>
                                <tr>
                                     <td><b>60-80</b></td>
                                    <td>&#60; 32.9</td>
                                    <td>32.9 - 38.9</td>
                                    <td>39.0 - 43.6</td>
                                    <td>&#62;&#61; 43.7</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </Box>
                </Col>
            </Row>



            <Row>
                <Col span={12} style={{ textAlign: 'left' }} >
                <Box>
                        <h2>BMI</h2>
                        <table  style={{ width: '100%', textAlign: 'center' }}>
                            <tr>
                                <th>BMI</th>
                                <th>BMI (DESIGNNATION BY WHO)</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>less than 18.5</td>
                                    <td>- (Underweight)</td>
                                </tr>
                                <tr>
                                    <td>18.5 or more and less than 25</td>
                                    <td>0 (Normal)</td>
                                </tr>
                                <tr>
                                    <td>25 or more and less than 30 </td>
                                    <td>+ (Overweight) </td>
                                </tr>
                                <tr>
                                <td> 30 or more </td>
                                    <td>++(Obess)</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </Box>
                </Col>
            </Row>
        </div>
    );

}

export default References;