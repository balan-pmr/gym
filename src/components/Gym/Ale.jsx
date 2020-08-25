/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import Box from "../Generic/Box";
import { useEffect,useState,useRef } from 'react';
import Message from '../Generic/Message';
import AddNewRecord from '../Gym/AddNewRecord';

const Ale = (props) => {

    const [records, setRecords] = useState([]);
    const refMessageInfo = useRef();
    const recordRef = useRef(null);

    // onMountComponnet
    useEffect( () => {
        async function fetchData() {
            console.log('Getting information for Ale gym records');
            refMessageInfo.current.showMessage('Consultado Registros')
            await fetch(process.env.REACT_APP_BASE_URL_API+process.env.REACT_APP_GET_GYM_USER_INFO+"ale")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result is', result)
                        setRecords(result);
                    },
                    (error) => {
                        let errorString =String(error);
                        console.log('error is ', errorString)
                    }
                );
            refMessageInfo.current.hideMessage();
        }
        fetchData();
    }, [setRecords]);


    function handleNewRecord(){
        //alert('Working in progress...')
        recordRef.current.showModal();
    }

    return (
        <div>
            <AddNewRecord ref={recordRef} />
            <Message ref={refMessageInfo} typeMessage="info" />
            <Box>
                <div style={{textAlign:'center'}}>
                <img style={{borderRadius:'50px', width:'100px' }} src="./assets/images/profiles/ale.png" alt="Avatar" /> 
                <br/>
                { records.length > 0 ? <span className="ml-button-primary" onClick={event => handleNewRecord(event)}  > Nuevo registro </span> :<span></span>}
                </div>
                {records.map(
                        (item, index) => {
                            return (
                                <span key={index} >
                                    <Box>
                                        <p>Fecha : <b> {item.date} </b> </p>
                                        <p>edad : <b>{item.age} </b> </p>
                                        <p>altura : <b>{item.height}  </b> </p>
                                        <p>peso : <b>{item.weight}  </b> </p>
                                        <p>grasa : <b>{item.fat}  </b> </p>
                                        <p>ibm : <b>{item.ibm} </b> </p>
                                        <p>muscle : <b>{item.muscle} </b> </p>
                                        <p>viseral : <b>{item.viseral} </b> </p>
                                        <p>edad metabolica : <b>{item.ageMetabol} </b> </p>                       
                                    </Box>
                                    {
                                        (index + 1) !== records.length ? 
                                        <div style={{textAlign:'center'}}>
                                            <img style={{borderRadius:'50px', width:'50px' }} src="./assets/patterns/up-arrow-button.png" alt="Up Arrow" /> 
                                        </div>                                        
                                        :
                                        <div></div>
                                    }
                                </span>
                            );
                        })
                }
            </Box>
        </div>
    );

}
 
export default Ale;