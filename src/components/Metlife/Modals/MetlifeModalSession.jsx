/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Auth from '../../Authentication/Authentication';

const MetlifeModalSession = forwardRef( (props, ref) => {

    const [show, setShow] = useState(false);
    let history = useHistory();

    useImperativeHandle(ref, () => ({
        getAlert() {
            console.log('getAlert from Child');
        },
        showModal(){
            console.log('Showing modal for expired session...')
            setShow(true);
        }
    }));

    const handleShowModal = (e) => {
        e.preventDefault();
        console.log('Removing user session....')
        Auth.onLogout();
        props.headerRef.current.updateLogged( Auth.getLogginStatus(), '' );
        setShow(false);
        history.push("/");
    }

    return (
        show && <span>
            <div className="modal" style={{zIndex: '3000'}}   >
                <div className="ml-lightbox-container-session modal-main" >
                    <div style={{display: 'flex'}}>                                            
                    </div>
                    <br/><br/><br/><br/>
                    <div style={{ textAlign:'center' }}>
                        <img src='./assets/images/session_timeout.png' alt="Session Timeout" 
                            style={{ width:'130px' }}/>
                    </div>
                    <h1 className="header-small align-center"> 
                        Lo sentimos.
                    </h1>                      
                    <h2 className="header-small align-center"> 
                        {process.env.REACT_APP_MODAL_SESSION_MESSAGE}
                    </h2>  
                    <br />
                    <div style={{display: 'flex'}}>
                        <div style={{  margin:'auto'  }} >
                        <a href="/" rel="modal:close" className="ml-button-primary" 
                            onClick={event => handleShowModal(event)}  >
                                INGRESAR
                        </a>              
                        </div>
                    </div> <br/><br/>                     
                    <br/><br/><br/><br/>
                </div>
            </div>

        </span>
        
    );

});

export default MetlifeModalSession;


