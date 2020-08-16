/**
 * Root App
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

import React, { useRef } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const headerRef = useRef();
  return (
    <span>
      <Router basename={process.env.REACT_APP_ROUTER_BASE || ''} > 
        <Header ref={headerRef} />
          <Content headerRef={headerRef} />
        <Footer/>    
      </Router>
    </span>
  );
}

export default App;
