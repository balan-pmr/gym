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
import { useState } from 'react';

const Login = (props) => {

    let history = useHistory();
    const [pwdValue, setPwdValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    
    const handleLogIn = async (e) => {
        e.preventDefault(); 
        setLoading(true);
        if(process.env.REACT_APP_CURRENT_ENVIROMENT === "gym-development" ){
            localLogin();
        }else{
            serviceLogin() 
        }
        setLoading(false);
    }

    function localLogin(){
        console.log('local logging')
        Auth.onAuthentication('');
        props.headerRef.current.updateLogged('');
        let minutesForActiveSession = parseInt(process.env.REACT_APP_MODAL_SESSION_ACTIVE_MINUTES);
        let timeForActiveSession = 1000 * 60 * minutesForActiveSession;
        setTimeout(() => { 
            props.modalSessionRef.current.showModal();
            Auth.onLogout(); 
        }, timeForActiveSession);
        history.push("/ref");        
    }

    async function serviceLogin(){
        console.log('Fetching data from  ', process.env.REACT_APP_BASE_URL_API+process.env.REACT_APP_POST_VALIDATE_USER)
        let obj = { password: pwdValue };
        await fetch(
            process.env.REACT_APP_BASE_URL_API+process.env.REACT_APP_POST_VALIDATE_USER,
            { method: 'POST', body: JSON.stringify(obj) }
        ).then(res => res.json())
            .then(
                (result) => {
                    if (result !== null) {
                        console.log('Result is ', result)
                        if(result.result === "true"){
                            Auth.onAuthentication('');
                            props.headerRef.current.updateLogged('');
                            let minutesForActiveSession = parseInt(process.env.REACT_APP_MODAL_SESSION_ACTIVE_MINUTES);
                            let timeForActiveSession = 1000 * 60 * minutesForActiveSession;
                            setTimeout(() => { 
                                props.modalSessionRef.current.showModal();
                                Auth.onLogout(); 
                            }, timeForActiveSession);
                            history.push("/ref");
                        }else{
                            setErrorMsg('password invalido.')
                        }
                    }
                },
                (error) => {
                    console.log(error)
                    setErrorMsg('Error inesperado: '+error)
                }
            );
    }

    return (
        <div style={{paddingBottom:'400px'}}>
            <Box>
                <div style={{ textAlign: 'center', display: 'table' }} >
                    <p>password:</p>
                    <input type="password" onChange={event => setPwdValue(event.target.value)} value={pwdValue} style={{margin:'10px'}} /> 
                    {loading ? <span className="ml-button-disabled">INGRESAR</span> :
                        <a href="/" className="ml-button-primary" onClick={event => handleLogIn(event)}  > INGRESAR</a>
                    }<br/>
                    {errorMsg !==""? <p>{errorMsg}</p>:""}
                </div>
            </Box>
        </div>
    );

}


export default Login;