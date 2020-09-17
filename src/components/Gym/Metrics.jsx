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
import References from './References';

const Metrics = (props) => {

    const [records, setRecords] = useState([]);
    const refMessageInfo = useRef();
    const recordRef = useRef(null);
    const [show, setShow] = useState(false);

    // onMountComponnet
    useEffect( () => {
        async function fetchData() {
            setShow(false);
            console.log('Getting information for '+props.match.params.id+' gym records');
            refMessageInfo.current.showMessage('Consultado Registros')
            await fetch(process.env.REACT_APP_BASE_URL_API+process.env.REACT_APP_GET_GYM_USER_INFO+props.match.params.id)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result is', result)
                        setRecords(result);
                        setShow(true);
                    },
                    (error) => {
                        let errorString =String(error);
                        console.log('error is ', errorString)
                    }
                );
            refMessageInfo.current.hideMessage();
        }
        fetchData();
    }, [setRecords,props.match.params.id]);



    function handleNewRecord(){
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
            
            <AddNewRecord ref={recordRef}  id={props.match.params.id} />
            
            <Message ref={refMessageInfo} typeMessage="info" />

            <Box display="table-cell"   >
                
                <div style={{textAlign:'center'}}>
                
                {
                    props.match.params.id ==="ale"?
                    <img style={{borderRadius:'50px', width:'100px' }} src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/profiles/ale.png'} alt="Avatar" />                     
                    :
                    props.match.params.id ==="balan"?
                    <img style={{borderRadius:'50px', width:'100px' }} src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/profiles/balan.PNG'} alt="Avatar" /> 
                    :
                    <img style={{borderRadius:'50px', width:'100px' }} src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/profiles/alemartinez.PNG'} alt="Avatar" /> 
                }
                
                <br/>

                { records.length > 0 && show ? 
                    <div>
                        <span style={{marginRight: '6px'}} className="ml-button-primary" onClick={event => handleNewRecord(event)}  > Nuevo registro </span> 
                    </div>
                    : <span></span>
                }

                </div>
                {show && records.map(
                        (item, index) => {
                            return (
                                    <Box display="table-cell" key={index} >
                                        <div style={dateStyle}> {( moment(item.date.substring(0,10)).locale('es') ).format('LL')}  </div>
                                        <table style={{ width: '100%', textAlign: 'center' }} className="greyGridTable"  >
                                            <thead>
                                                <tr>
                                                    <th style={{textAlign:'right'}} >edad</th>
                                                    <th style={{textAlign:'left'}} >{item.age}</th>                                                                                       
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>altura</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.height}</b></td>                                                    
                                                </tr>
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>peso</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.weight}</b></td>                                                    
                                                </tr>    
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>grasa</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.fat}</b></td>                                                    
                                                </tr>   
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>bmi</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.ibm}</b></td>                                                    
                                                </tr>  
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>muscle</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.muscle}</b></td>                                                    
                                                </tr>  
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>metabolic age</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.ageMetabol}</b></td>                                                    
                                                </tr>   
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>resting metabolism</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.restMetabol}</b></td>                                                    
                                                </tr>   
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>Viseral</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.viseral}</b></td>                                                    
                                                </tr>   

                                            </tbody>
                                        </table>
                                    </Box>
                            );
                        })
                }
            </Box>
            <br/>
            
            {show && <References/>}

        </div>
    );    

}
 
export default Metrics;