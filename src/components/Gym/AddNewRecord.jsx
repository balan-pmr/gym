/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

import React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Message from '../Generic/Message';

const AddNewRecord = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        getAlert() {
            console.log('getAlert from Child');
        },
        showModal() {
            console.log('Showing modal for expired session...')
            setShow(true);
        }
    }));

    const handleCloseModal = (e) => { setShow(false); }


    
    const [peso, setPeso] = useState('');
    const [ibm, setIbm] = useState('');
    const [muscle, setMuscle] = useState('');
    const [viseral, setViseral] = useState('');
    const [metabolicAge, setMetabolicAge] = useState('');
    const [fat, setFat] = useState('');
    const [restMetabol, setRestMetabol] = useState('');
    const [loading, setLoading] = useState(false);
    const refMessageInfo = useRef();
    const refMessageError = useRef();
    let history = useHistory();

    const handleSaveRecord = async (e) => { 

        setLoading(true);
        refMessageInfo.current.hideMessage();
        refMessageError.current.hideMessage();
        

        if(peso==="" || ibm==="" || muscle==="" || viseral==="" || metabolicAge==="" ){
            refMessageError.current.showMessage('Todos los datos son obligatorios');
            setLoading(false);
        }else{
            refMessageInfo.current.showMessage('Guardando Datos...');
            let bodyRequest = {
                "peso":peso,
                "ibm": ibm,
                "muscle": muscle,
                "viseral":viseral,
                "metabolicAge":metabolicAge,
                "fat":fat,
                "restMetabol": restMetabol
            }
            console.log(JSON.stringify(bodyRequest)); 
            console.log('Fetching data from  ', process.env.REACT_APP_BASE_URL_API+process.env.REACT_APP_POST_SAVE_NEW_RECORD+"&sheetName=ale")
            await fetch(
                process.env.REACT_APP_BASE_URL_API+process.env.REACT_APP_POST_SAVE_NEW_RECORD+"&sheetName=ale",
                { method: 'POST', body: JSON.stringify(bodyRequest) }
            ).then(res => res.json())
                .then(
                    (result) => {
                        if (result !== null) {
                            console.log('Result is ', result)
                            if(result.result === "true"){
                                refMessageInfo.current.showMessage('Registros guardados exitosamente.');
                                setPeso('');
                                setIbm('');
                                setMuscle('');
                                setViseral('');
                                setMetabolicAge('');
                                setFat('');
                                history.push("/ref");
                            }else{
                                refMessageError.current.showMessage('Error: '+JSON.stringify(result) );
                            }
                        }
                    },
                    (error) => {
                        console.log(error)
                        refMessageError.current.showMessage(JSON.stringify(error));
                    }
                );

        }

    }

    return (
        show &&
        <div className="modal" style={{ zIndex: '2' }}  >
            
            <Message ref={refMessageError} typeMessage="error" />
            <Message ref={refMessageInfo} typeMessage="info" />
            

            <div className="ml-lightbox-container modal-main" id="ex1"  >

                <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 0 0 auto' }} onClick={event => handleCloseModal(event)}  > <FontAwesomeIcon icon={faTimes} /> </div>
                </div>
                <h1 className="header-small align-center">  Agregar Registro </h1>

                <table style={{ width: '100%', textAlign: 'center' }} className="greyGridTable"  >
                    <tbody>
                        <tr>
                            <td><b>PESO:</b></td>
                            <td><input type="text" onChange={event => setPeso(event.target.value)} value={peso} style={{ margin: '10px' }} /></td>
                        </tr>
                        <tr>
                            <td><b>GRASA</b></td>
                            <td><input type="text" onChange={event => setFat(event.target.value)} value={fat} style={{ margin: '10px' }} /></td>
                        </tr>
                        <tr>
                            <td><b>BMI</b></td>
                            <td>  <input type="text" onChange={event => setIbm(event.target.value)} value={ibm} style={{ margin: '10px' }} /> </td>
                        </tr>
                        <tr>
                            <td><b>MUSCLE</b></td>
                            <td> <input type="text" onChange={event => setMuscle(event.target.value)} value={muscle} style={{ margin: '10px' }} />  </td>
                        </tr>
                        <tr>
                            <td><b>VISERAL</b></td>
                            <td> <input type="text" onChange={event => setViseral(event.target.value)} value={viseral} style={{ margin: '10px' }} /> </td>
                        </tr>
                        <tr>
                            <td><b>EDAD METABOLICA</b></td>
                            <td> <input type="text" onChange={event => setMetabolicAge(event.target.value)} value={metabolicAge} style={{ margin: '10px' }} /> </td>
                        </tr>
                        <tr>
                            <td><b>RESTING METABOLISM</b></td>
                            <td><input type="text" onChange={event => setRestMetabol(event.target.value)} value={restMetabol} style={{ margin: '10px' }} /></td>
                        </tr>
                    </tbody>
                </table>


                <br />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div >

                        {loading ? <span style={{ margin: 'auto 30px 0 auto' }}  className="ml-button-disabled">Guardar</span> :
                        <span style={{ margin: 'auto 30px 0 auto' }} rel="modal:close" className="ml-button-primary" onClick={event => handleSaveRecord(event)}  >
                        Guardar
                        </span>
                        }                        

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

export default AddNewRecord;


