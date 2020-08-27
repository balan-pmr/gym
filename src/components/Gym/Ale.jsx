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
import moment from 'moment';
import 'moment/locale/es';

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

    const dateStyle = {
            backgroundColor: 'ghostwhite',
            margin: '-7px 5px 15px',
            borderRadius: '5px',
            padding: '5px',
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            boxShadow: '1px 3px 5px 0 darkcyan' 
    };

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
                                    <Box justify="center">
                                        <div style={dateStyle}> {( moment(item.date.substring(0,10)).locale('es') ).format('LL')}  </div>
                                        <table style={{ width: '100%', textAlign: 'center' }} className="greyGridTable"  >
                                            <thead>
                                                <tr>
                                                    <th>edad</th>
                                                    <th>{item.age}</th>                                                                                       
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><b>altura</b></td>
                                                    <td><b>{item.height}</b></td>                                                    
                                                </tr>
                                                <tr>
                                                    <td><b>peso</b></td>
                                                    <td><b>{item.weight}</b></td>                                                    
                                                </tr>    
                                                <tr>
                                                    <td><b>grasa</b></td>
                                                    <td><b>{item.fat}</b></td>                                                    
                                                </tr>   
                                                <tr>
                                                    <td><b>bmi</b></td>
                                                    <td><b>{item.ibm}</b></td>                                                    
                                                </tr>  
                                                <tr>
                                                    <td><b>muscle</b></td>
                                                    <td><b>{item.muscle}</b></td>                                                    
                                                </tr>  
                                                <tr>
                                                    <td><b>metabolic age</b></td>
                                                    <td><b>{item.ageMetabol}</b></td>                                                    
                                                </tr>   
                                                <tr>
                                                    <td><b>resting metabolism</b></td>
                                                    <td><b>{item.restMetabol}</b></td>                                                    
                                                </tr>   
                                                <tr>
                                                    <td><b>Viseral</b></td>
                                                    <td><b>{item.viseral}</b></td>                                                    
                                                </tr>   

                                            </tbody>
                                        </table>
                                    </Box>
                                </span>
                            );
                        })
                }
            </Box>
        </div>
    );

}
 
export default Ale;