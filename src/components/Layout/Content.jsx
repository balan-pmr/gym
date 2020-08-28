/**
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import Home from '../Home';
import Login from '../Login';
import SecuredRoute from '../Authentication/SecuredRoute'
import TimeOutSessionModal from '../Generic/Modals/TimeOutSessionModal';
import NotFound404 from '../NotFound404';
import {Route, Switch} from 'react-router-dom';
import { useRef } from 'react';
import References from '../Gym/References'
import Metrics from '../Gym/Metrics';

const Content = (props) => {
  const modalSessionRef = useRef();
  return (
      <div style={{ backgroundColor: '#c2d1ce', display:'auto', overflow:'auto', padding:'20px 0 20px 0' }}>
        <TimeOutSessionModal ref={modalSessionRef} headerRef={props.headerRef} />
        <Switch>
          <Route exact path="/" render={(innerprops) => ( <Login {...innerprops} headerRef={props.headerRef} modalSessionRef={modalSessionRef} /> ) }  />
          <SecuredRoute exact path="/home" component={Home} />
          <Route exact path="/ref" component={References}/>
          <SecuredRoute exact path='/metrics/:id'  component={Metrics} />
          <Route component={NotFound404}/>
        </Switch>
      </div>
  );
}



export default Content;
