/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import Box from "../Generic/Box";
import { useEffect } from 'react';

const Ale = (props) => {

    // onMountComponnet
    useEffect( () => {
        async function fetchData() {
            console.log('Getting information for Ale gym records');
            await fetch(process.env.REACT_APP_BASE_URL_API+process.env.REACT_APP_GET_GYM_USER_INFO+"ale")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result is', result)
                    },
                    (error) => {
                        let errorString =String(error);
                        console.log('error is ', errorString)
                    }
                );
        }
        fetchData();
    }, []);

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