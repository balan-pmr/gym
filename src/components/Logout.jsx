/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import { string } from 'prop-types';
import Auth from './Authentication/Authentication';
import { useHistory } from "react-router-dom";


const Logout = ({ uid, headerRef }) => {
  
  let history = useHistory();

  const handleLogout = (e) => {
      e.preventDefault();
      console.log('Removing user session....')
      Auth.onLogout();
      headerRef.current.updateLogged('');
      history.push("/");
  }

  return (
    <div style={{ display:'inline-flex'}}  >
          <span style={{ marginTop: '28px' }} >{uid}</span>
          <span style={{ marginTop: '60px', marginLeft: '15px' }}>
            <a href="/" onClick={(event) => handleLogout(event)}  className="ml-link" >
              Cerrar Sesión
            </a>
          </span>
    </div>
);
}

Logout.propTypes = {
  uid: string.isRequired
};
 
export default Logout;