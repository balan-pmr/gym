/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import Box from "../Generic/Box";

const Ale = (props) => {
    return (
        <div>
            <Box>
                <div style={{textAlign:'center'}}>
                <img style={{borderRadius:'50px', width:'100px' }} src="./assets/images/profiles/ale.png" alt="Avatar" /> 
                </div>
                <p>Information goes here...</p>
            </Box>
        </div>
    );

}
 
export default Ale;