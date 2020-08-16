/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from './Authentication'

const SecuredRoute = (props) => {
    return (
      <Route path={props.path} render={data=> Auth.getLogginStatus()?
        (<props.component {... data}></props.component>): (<Redirect to={{pathname:'/'}}></Redirect>) 
      }></Route>
    )
}

export default SecuredRoute;

