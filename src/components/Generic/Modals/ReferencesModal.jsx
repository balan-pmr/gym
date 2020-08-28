/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

import React from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';
import References from '../../Gym/References';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ReferencesModal = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        getAlert() {
            console.log('getAlert from Child');
        },
        showModal() {
            setShow(true);
        }
    }));

    const handleCloseModal = (e) => { setShow(false); }

    return (
        show &&
        <div className="modal" style={{ zIndex: '2' }}  >

            <div className="ml-lightbox-container modal-main" id="ex1"  >

                <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 0 0 auto' }} onClick={event => handleCloseModal(event)}  > <FontAwesomeIcon icon={faTimes} /> </div>
                </div>

                <References/>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div >                   
                        <span style={{ margin: 'auto 0 0 auto' }} rel="modal:close" className="ml-button-primary" onClick={event => handleCloseModal(event)}  >
                            Cerrar
                        </span>
                    </div>
                </div>

                <br />

            </div>
        </div>
    );

});

export default ReferencesModal;


