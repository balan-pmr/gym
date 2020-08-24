/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';

const Box = (props) => {

    console.log(props.justify)

    const boxWrapper ={ display: 'flex', justifyContent: props.justify !== undefined ? props.justify : 'center' , padding: '10px 0 10px 0' }
    const boxContent={
        backgroundColor: 'white',
        //minHeight: '320px',
        //minWidth: '350px',
        maxHeight: 'auto',
        maxWidth: 'auto',
        boxShadow: '1px 3px 5px 0 darkcyan',
        padding: '20px'   
    }

    return (
        <div style={boxWrapper} >
            <div style={boxContent}>
                {props.children===""?"Box content goes here..":props.children}
            </div>
        </div>
    );

}
 
export default Box;