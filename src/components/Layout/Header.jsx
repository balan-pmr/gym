/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

import React from 'react';
import Logout from '../Logout';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Authentication/Authentication';

const Header = forwardRef((props, ref) => {

    const [logged, setLogged] = useState(false);
    const [uid, setUid] = useState('');

    useImperativeHandle(ref, () => ({
        updateLogged(uid) {
            setLogged(Auth.getLogginStatus())
            setUid(uid)
        }
    }));

    return (
        <Row gutter={40} style={{ backgroundColor: '#45b39d' }} >

            <Col span={4} style={{ textAlign: 'center' }}>
                <Link to="/ref" >
                    <img src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/gym/gym.png'}  alt="Home Icon" style={{ width: '80px', margin: '15px 0 0px 0' }} />                 
                </Link>
                <p style={{ fontSize: '11px' }} > nosotros bien gorditos jiji  </p>
            </Col>
            <Col span={4} style={{ textAlign: 'left' }}>
                <nav>
                    <ul>

                        <li>
                            <Link to="/ref" >
                                <span className="ml-link" >
                                    Referencias
                                 </span>
                            </Link>
                        </li>

                        {
                         Auth.getLogginStatus()
                         &&
                         process.env.REACT_APP_LIST_OF_MEMBERS.split(",").map((item, i) => {
                            return (
                            <li>
                                <Link  key={i} to={'/metrics/'+item}  >
                                    <span className="ml-link" >
                                        {item}
                                    </span>
                                </Link>
                            </li>                                                        
                            );
                          })
                        }


                    </ul>
                </nav>

            </Col>

            {logged ?
                <Col span={4} style={{ display: 'flex', justifyContent: 'center' }} ><Logout uid={uid} headerRef={ref} /></Col>
                :
                <Col span={4}>
                    <Link to="/" >
                        <span className="ml-link" style={{marginTop:'60px', backgroundColor: 'black' }} >
                        &nbsp;Iniciar&nbsp;
                        </span>
                    </Link>
                </Col>
            }

        </Row>
    );

});


export default Header;
