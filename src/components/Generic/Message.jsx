/**
 * Support info & error messages (queue), show & hide handled by parent.
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faDumbbell } from '@fortawesome/free-solid-svg-icons'

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const Message = forwardRef((props, ref) => {

    const [open, setOpen] = useState(false);
    const [messageQueue, setMessageQueue] = useState([]);
    //const executeScroll = () => scrollToRef(ref)

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
        getAlert() {
        },
        showMessage(msg) {
            let arrMessage = messageQueue.slice();
            arrMessage.push(msg);
            setMessageQueue(arrMessage);
            setOpen(true);
            //executeScroll();
        },
        hideMessage() {
            setOpen(false);
            setMessageQueue([]);
        }
    }));

    const hideMessage = () => {
        setOpen(false);
        setMessageQueue([]);
    }

    return (
        open ? 
            <div style={{display: 'flex', justifyContent: 'center'}} >
                <div className={props.typeMessage === "info" ? "ml-msg ml-msg-msg" : "ml-msg ml-msg-error"}
                style={{ position: 'sticky', zIndex: '10', top: '0' }} >
                    <span className="ml-msg-txt">
                        <span className="ml-msg-error-text">

                            {messageQueue.map((value, index) =>
                                <span key={index}>
                                    {props.typeMessage === "info" ?
                                        <FontAwesomeIcon icon={faDumbbell} className="svg-blue" />
                                        : <FontAwesomeIcon icon={faExclamationCircle} className="svg-red" />}
                                    &nbsp;
                                        {value}
                                    &nbsp;
                                    {props.typeMessage === "info" ?
                                        <FontAwesomeIcon icon={faDumbbell} className="svg-blue" />
                                        : <FontAwesomeIcon icon={faExclamationCircle} className="svg-red" />}
                                    <br />
                                </span>)
                            }
                        </span>
                        { !open ?
                        <span className="ml-msg-close" onClick={hideMessage} >
                            <img src='./assets/patterns/close-icon.svg' alt="Close Icon" />
                        </span>
                        : <span></span>
                        }
                        &nbsp;&nbsp;&nbsp;
                    </span>
                </div> 
            </div>
            : <span></span>
    );

});

export default Message;