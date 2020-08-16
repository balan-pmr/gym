/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import Auth from './Authentication/Authentication';
import { useHistory } from "react-router-dom";
import Box from './Generic/Box';

const Login = (props) => {

    let history = useHistory();

    const handleLogIn = (e) => {
        e.preventDefault();
        let randomUser = stringGenerator(7);
        Auth.onAuthentication(randomUser);
        props.headerRef.current.updateLogged(Auth.getLogginStatus(), randomUser);
        //Trigger timer for logout user :: 1000 = 1s
        let minutesForActiveSession = parseInt(process.env.REACT_APP_MODAL_SESSION_ACTIVE_MINUTES);
        let timeForActiveSession = 1000 * 60 * minutesForActiveSession;
        setTimeout(() => { props.modalSessionRef.current.showModal() }, timeForActiveSession);
        history.push("/home");
    }

    function stringGenerator(len) {
        var text = " ";
        var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < len; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        return text.toUpperCase();
    }

    return (
        <div>
            <Box>
                <div style={{ textAlign:'center' }} >
                    <h5>Login impl goes here</h5>
                    <input type="button" value="Ingresar" onClick={handleLogIn} />
                </div>
            </Box>
        </div>
    );

}


export default Login;