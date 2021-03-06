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
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useHistory } from "react-router-dom";


const Header = forwardRef((props, ref) => {

    let history = useHistory();
    const [logged, setLogged] = useState(false);
    const [uid, setUid] = useState('');
    const defaultValueForDropdown = { 'value': '0', 'label':'Seleccione un registro'};
    const [valueSourceSystem] = useState(defaultValueForDropdown);

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
                <p style={{ fontSize: '11px', color:'white' }} > <b> Se les acabaron sus gorditos... </b>  </p>
            </Col>
            <Col span={4} style={{ textAlign: 'left' }}>
                <nav>
                    <ul style={{ listStyleType :'none' }} >

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
                         // ale,balan,alemartinez,paula,uriel,gibran,juan
                        <Dropdown
                                className="ml-form-dropdown"
                                options={[{'value': 'ale'},{'value': 'balan'},{'value': 'henry'},{'value': 'alemartinez'},{'value': 'paula'},{'value': 'uriel'},{'value': 'gibran'},{'value': 'juan'}]}
                                value={valueSourceSystem}
                                onChange={event => { console.log('event is ', event); history.push("/metrics/"+event.value);   }}
                        />
                        }


                    </ul>
                </nav>

            </Col>

            {logged ?
                <Col span={4} style={{ display: 'flex', justifyContent: 'center' }} ><Logout uid={uid} headerRef={ref} /></Col>
                :
                <Col span={4}>
                    <Link to="/" >
                        <span className="ml-link" style={{marginTop:'60px', backgroundColor: 'floralwhite', color:'black' }} >
                        &nbsp;Iniciar&nbsp;
                        </span>
                    </Link>
                </Col>
            }

        </Row>
    );

});


export default Header;
