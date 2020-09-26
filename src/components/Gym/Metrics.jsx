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
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);
    const [lastFat, setLastFat] = useState(0);
    const [lastMuscle, setLastMuscle] = useState(0);
    const [lastViseral, setLastViseral] = useState(0);
    const [lastBmi, setLastBmi ] = useState(0);
    
    

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
                        console.log('result is', result, 'size: ', result.length)
                        setRecords(result);
                        setShow(true);
                        setGender(result[0].gender);
                        setAge(result[0].age);
                        setLastFat(result[0].fat);
                        setLastMuscle(result[0].muscle);
                        setLastViseral(result[0].viseral);
                        setLastBmi(result[0].ibm);
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

        
        { show &&
        
            <Box display="table-cell" style={{padding: '10px'}}  >
                <div className="module" style={{textAlign:'center', inlineSize:"max-content"}} >
                    <h2 >
                    <span style={{backgroundColor:"white", borderRadius:"12px", padding:"2px"}} >    {props.match.params.id} </span> 
                    </h2>
                
                {
                    props.match.params.id ==="ale" && show?
                    <img style={{borderRadius:'50px', width:'100px' }} src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/profiles/ale.png'} alt="Avatar" />                     
                    :
                    props.match.params.id ==="balan" && show ?
                    <img style={{borderRadius:'50px', width:'100px' }} src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/profiles/balan.PNG'} alt="Avatar" /> 
                    :
                    props.match.params.id ==="alemartinez" && show ?
                    <img style={{borderRadius:'50px', width:'100px' }} src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/profiles/alemartinez.PNG'} alt="Avatar" /> 
                    :
                    <img style={{borderRadius:'50px', width:'100px' }} src={process.env.REACT_APP_ROUTER_BASE+'/assets/images/gym/gym-login.png'} alt="Avatar" />                     
                }
                <br/>
                { records.length > 0 && show ? 
                    
                    <div>
                        <span style={{marginRight: '6px'}} className="ml-button-primary" onClick={event => handleNewRecord(event)}  > Nuevo registro </span> 
                    </div>
                    : <span></span>
                }

                </div>
            </Box>
        }


    { show &&
            <Box display="table-cell"   >
                
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
                                                    <td style={{textAlign:'right'}} ><b>edad metabolica</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.ageMetabol}</b></td>                                                    
                                                </tr>   
                                                <tr>
                                                    <td style={{textAlign:'right'}} ><b>metabolismo</b></td>
                                                    <td style={{textAlign:'left'}} ><b>{item.restMetabol}</b></td>                                                    
                                                </tr>                                                   
                                                <tr>
                                                    <td style={{textAlign:'right',  backgroundColor:"crimson", color:"white"}} ><b>grasa en cuerpo</b></td>
                                                    <td style={{textAlign:'left',   border: '2px solid crimson'  }} ><b>{item.fat}</b></td>                                                    
                                                </tr>                                                  
                                                <tr>
                                                    <td style={{textAlign:'right', backgroundColor:"darkorange" , color:"white"}}   ><b>musculo</b></td>
                                                    <td style={{textAlign:'left', border: '2px solid darkorange' }} ><b>{item.muscle}</b></td>                                                    
                                                </tr>  
                                                <tr>
                                                    <td style={{textAlign:'right', backgroundColor:"blueviolet" , color:"white"}} ><b>grasa en intestinos</b></td>
                                                    <td style={{textAlign:'left', border: '2px solid blueviolet'}} ><b>{item.viseral}</b></td>                                                    
                                                </tr> 
                                                <tr>
                                                    <td style={{textAlign:'right', backgroundColor:"#ff748c", color:"white" }} ><b>bmi</b></td>
                                                    <td style={{textAlign:'left', border: '2px solid #ff748c'}} ><b>{item.ibm}</b></td>                                                    
                                                </tr>                                                                                                   
                                            </tbody>
                                        </table>
                                    </Box>
                            );
                        })
                }
            </Box>
        }
            <br/>
            
            { show && 
             < References 
               age={age} 
               gender={gender} 
               lastFat={lastFat}
               lastMuscle={lastMuscle}
               lastViseral={lastViseral}
               lastBmi={lastBmi}
             />
            }

        </div>
    );    

}
 
export default Metrics;