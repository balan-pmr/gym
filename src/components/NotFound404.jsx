/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

import React from 'react';

const NotFound404 = () => (
    <div style={{}} >
        <div style={{ textAlign: 'center' }}>
            <img src='./assets/images/page_not_found.png' alt="Page not found"
                style={{ width: '130px', marginTop:'150px' }} />
        </div>
        <h1 className="header-small align-center">
            Oops!
        </h1>
        <h2 className="header-small align-center">
            {process.env.REACT_APP_MODAL_404_MESSAGE_TITLE}
        </h2>
    </div>
);

export default NotFound404;