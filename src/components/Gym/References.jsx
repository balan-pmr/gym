/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */


import React from 'react';
import "react-simple-flex-grid/lib/main.css";
import Box from '../Generic/Box';


const References = (props) => {

    const display = "table-cell";
    const colorFat = {backgroundColor:"crimson", color:"white"};
    const colorMuscle = {backgroundColor:"darkorange", color:"white"};
    const colorViseral = {backgroundColor:"blueviolet", color:"white"};
    const colorBmi = { backgroundColor:"#ff748c" , color:"white"};

    return (
        <div  style={{paddingLeft:'221px'}}  >
        <Box className="box" display="table-cell"  > 
        
            <Box display={display}  >
                <h3 style={colorFat} >Body Fat Percentege (grasa en cuerpo)</h3>
                <table style={{ width: '100%', textAlign: 'center' }} className="greyGridTable"  >
                    <thead>
                        <tr>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>-(Low)</th> 
                            <th>0 (Normal)</th>
                            <th>+ (High)</th>
                            <th>++ (Very High)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { ( (  props.age === undefined || (props.age >=10 && props.age <=39)   ) && (props.gender==="FEMALE" || props.gender===undefined ) ) && 
                        <tr>
                            <td><b>MUJER</b></td>
                            <td><b>20-39</b></td>
                            <td style={ props.lastFat<21? colorFat : {} }                            >&#60; 21.0</td>
                            <td style={ props.lastFat>=21 && props.lastFat<=32.9 ? colorFat: {} }    >21.0 - 32.9</td>
                            <td style={ props.lastFat>=33.0 && props.lastFat<=38.9 ? colorFat : {} } >33.0 - 38.9</td>
                            <td style={ props.lastFat>=39.0? colorFat : {} }                          >&#62;&#61; 39.0</td>
                        </tr> }
                        { ( ( props.age === undefined || (props.age >=40 && props.age <=59)   ) && (props.gender==="FEMALE" || props.gender===undefined ) )  && 
                        <tr>
                            <td><b>MUJER</b></td>
                            <td><b>40-59</b></td>
                            <td style={ props.lastFat<23? colorFat : {} }                          >&#60; 23.0</td>
                            <td style={ props.lastFat>=23.0 && props.lastFat<=33.9 ? colorFat: {} }  >23.0 - 33.9</td>
                            <td style={ props.lastFat>=34.0 && props.lastFat<=39.9 ? colorFat: {} }  >34.0 - 39.9</td>
                            <td style={ props.lastFat>=40? colorFat : {} }                          >&#62;&#61; 40.0</td>
                        </tr> }
                        { ( (  props.age === undefined  || (props.age >=60 && props.age <=79)  ) && (props.gender==="FEMALE" || props.gender===undefined ) ) && 
                        <tr>
                            <td><b>MUJER</b></td>
                            <td><b>60-79</b></td>
                            <td style={ props.lastFat<24? colorFat : {} }                            >&#60; 24.0</td>
                            <td style={ props.lastFat>=24.0 && props.lastFat<=35.9 ? colorFat: {} }  >24.0 - 35.9</td>
                            <td style={ props.lastFat>=36.0 && props.lastFat<=41.9 ? colorFat: {} }  >36.0 - 41.9</td>
                            <td style={ props.lastFat>=42? colorFat : {} }                           >&#62;&#61; 42.0</td>
                        </tr> }
                        { ( (  props.age === undefined || (props.age >=10 && props.age <=39)  ) && (props.gender==="MALE" || props.gender===undefined ) ) && 
                        <tr>
                            <td><b>HOMBRE</b></td>
                            <td><b>20-39</b></td>
                            <td style={ props.lastFat<8.0? colorFat : {} }                            >&#60; 8.0</td>
                            <td style={ props.lastFat>=8.0 && props.lastFat<=19.9 ? colorFat: {} }    >8.0 - 19.9</td>
                            <td style={ props.lastFat>=20.0 && props.lastFat<=24.9 ? colorFat: {} }   >20.0 - 24.9</td>
                            <td style={ props.lastFat>=25? colorFat : {} }                            >&#62;&#61; 25.0</td>
                        </tr>  }
                        {  ( ( props.age === undefined  || (props.age >=40 && props.age <=59)  ) && (props.gender==="MALE" || props.gender===undefined ) ) && 
                        <tr>
                            <td><b>HOMBRE</b></td>
                            <td><b>40-59</b></td>
                            <td style={ props.lastFat<11.0? colorFat : {} }                           >&#60; 11.0</td>
                            <td style={ props.lastFat>=11.0 && props.lastFat<=21.9 ? colorFat: {} }   >11.0 - 21.9</td>
                            <td style={ props.lastFat>=22.0 && props.lastFat<=27.9 ? colorFat: {} }   >22.0 - 27.9</td>
                            <td style={ props.lastFat>=28? colorFat : {} }                            >&#62;&#61; 28.0</td>
                        </tr> }
                        {  ( ( props.age === undefined || (props.age >=60 && props.age <=79)   ) && (props.gender==="MALE" || props.gender===undefined ) )  && 
                        <tr>
                            <td><b>HOMBRE</b></td>
                            <td><b>60-79</b></td>
                            <td style={ props.lastFat<13.0? colorFat : {} }                          >&#60; 13.0</td>
                            <td style={ props.lastFat>=13.0 && props.lastFat<=24.9 ? colorFat: {} }  >13.0 - 24.9</td>
                            <td style={ props.lastFat>=25.0 && props.lastFat<=29.9 ? colorFat: {} }  >25.0 - 29.9</td>
                            <td style={ props.lastFat>=30? colorFat : {} }                           >&#62;&#61; 30.0</td>
                        </tr> }
                    </tbody>
                </table>
            </Box>

            <Box  display={display} >
                <h3 style={colorMuscle} >Skeletal Muscle Percentege (musculo)</h3>
                <table style={{ width: '100%', textAlign: 'center' }} className="greyGridTable"  >
                    <thead>
                        <tr>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>-(Low)</th>
                            <th>0 (Normal)</th>
                            <th>+ (High)</th>
                            <th>++ (Very High)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { ( ( props.age === undefined || (props.age >=10 && props.age <=39)   ) && (props.gender==="FEMALE" || props.gender===undefined ) )  && 
                        <tr>
                            <td><b>MUJER</b></td>
                            <td><b>18-39</b></td>
                            <td style={ props.lastMuscle<24.3? colorMuscle : {} }                              >&#60; 24.3</td>
                            <td style={ props.lastMuscle>=24.3 && props.lastMuscle<=30.3 ? colorMuscle: {} }   >24.3 - 30.3</td>
                            <td style={ props.lastMuscle>=30.4 && props.lastMuscle<=35.3 ? colorMuscle: {} }   >30.4 - 35.3</td>
                            <td style={ props.lastMuscle>=35.4? colorMuscle : {} }                             >&#62;&#61; 35.4</td>
                        </tr> }
                        { ( ( props.age === undefined || (props.age >=40 && props.age <=59)   ) && (props.gender==="FEMALE" || props.gender===undefined ) )  && 
                        <tr>
                            <td><b>MUJER</b></td>
                            <td><b>40-59</b></td>
                            <td style={ props.lastMuscle<24.1? colorMuscle : {} }                              >&#60; 24.1</td>
                            <td style={ props.lastMuscle>=24.1 && props.lastMuscle<=30.1 ? colorMuscle: {} }   >24.1 - 30.1</td>
                            <td style={ props.lastMuscle>=30.2 && props.lastMuscle<=35.1 ? colorMuscle: {} }   >30.2 - 35.1</td>
                            <td style={ props.lastMuscle>=35.2? colorMuscle : {} }                             >&#62;&#61; 35.2</td>
                        </tr> }
                        { ( ( props.age === undefined || (props.age >=60 && props.age <=80)   ) && (props.gender==="FEMALE" || props.gender===undefined ) ) && 
                        <tr>
                            <td><b>MUJER</b></td>
                            <td><b>60-80</b></td>
                            <td style={ props.lastMuscle<23.9? colorMuscle : {} }                             >&#60; 23.9</td>
                            <td style={ props.lastMuscle>=23.9 && props.lastMuscle<=39.9 ? colorMuscle: {} }  >23.9 - 29.9</td>
                            <td style={ props.lastMuscle>=30.0 && props.lastMuscle<=34.9 ? colorMuscle: {} } >30.0 - 34.9</td>
                            <td style={ props.lastMuscle>=35.0 ? colorMuscle : {} }                          >&#62;&#61; 35.0</td>
                        </tr> }
                        { ( ( props.age === undefined || (props.age >=10 && props.age <=39)   ) && (props.gender==="MALE" || props.gender===undefined ) )  && 
                        <tr>
                            <td><b>HOMBRE</b></td>
                            <td><b>18-39</b></td>
                            <td style={ props.lastMuscle<33.3? colorMuscle : {} }                         >&#60; 33.3</td>
                            <td style={ props.lastMuscle>=33.3 && props.lastMuscle<=39.3 ? colorMuscle: {} }  >33.3 - 39.3</td>
                            <td style={ props.lastMuscle>=39.4 && props.lastMuscle<=44.0 ? colorMuscle: {} }   >39.4 - 44.0</td>
                            <td style={ props.lastMuscle>=44.1 ? colorMuscle : {} }                     >&#62;&#61; 44.1</td>
                        </tr> }
                        {( ( props.age === undefined || (props.age >=40 && props.age <=59)   ) && (props.gender==="MALE" || props.gender===undefined ) )  && 
                        <tr>
                            <td><b>HOMBRE</b></td>
                            <td><b>40-59</b></td>
                            <td style={ props.lastMuscle<33.1? colorMuscle : {} }                     >&#60; 33.1</td>
                            <td style={ props.lastMuscle>=33.1 && props.lastMuscle<=39.1 ? colorMuscle: {} }  >33.1 - 39.1</td>
                            <td style={ props.lastMuscle>=39.2 && props.lastMuscle<=43.8 ? colorMuscle: {} }  >39.2 - 43.8</td>
                            <td style={ props.lastMuscle>=43.9 ? colorMuscle : {} }                >&#62;&#61; 43.9</td>
                        </tr> }
                        { ( ( props.age === undefined || (props.age >=60 && props.age <=80)   ) && (props.gender==="MALE" || props.gender===undefined ) ) && 
                        <tr>
                            <td><b>HOMBRE</b></td>
                            <td><b>60-80</b></td>
                            <td style={ props.lastMuscle<32.9? colorMuscle : {} }      >&#60; 32.9</td>
                            <td style={ props.lastMuscle>=32.9 && props.lastMuscle<=38.9 ? colorMuscle: {} }  >32.9 - 38.9</td>
                            <td style={ props.lastMuscle>=39.0 && props.lastMuscle<=43.6 ? colorMuscle: {} }  >39.0 - 43.6</td>
                            <td style={ props.lastMuscle>=43.7 ? colorMuscle : {} }                >&#62;&#61; 43.7</td>
                        </tr> }
                    </tbody>
                </table>
            </Box>

            <br/>

            <Box display={display} >
                <h3 style={colorViseral} >Viceral Fat Level (grasa en intestinos)</h3>
                <table style={{ width: '100%', textAlign: 'center' }} className="greyGridTable"  >
                    <thead>
                        <tr>
                            <th>Viceral Fat Level</th>
                            <th>Viceral Fat Level Classification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={ props.lastViseral<=9? colorViseral : {} }    > &#60;&#61; 9 </td>
                            <td>0 (Normal)</td>
                        </tr>
                        <tr>
                            <td style={ props.lastViseral>=10 &&  props.lastViseral<=14 ? colorViseral : {} }   >10 - 14 </td>
                            <td>+ (High) </td>
                        </tr>
                        <tr>
                            <td style={ props.lastViseral>=15? colorViseral : {} }   > &#62;&#61; 15 </td>
                            <td>++(Very High)</td>
                        </tr>
                    </tbody>
                </table>
            </Box>


            <Box  display={display} >
                <h3 style={colorBmi} >BMI</h3>
                <table style={{ width: '100%', textAlign: 'center' }} className="greyGridTable"  >
                    <thead>
                        <tr>
                            <th>BMI</th>
                            <th>BMI (DESIGNNATION BY WHO)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  style={ props.lastBmi<18.5? colorBmi : {} }   >less than 18.5</td>
                            <td>- (Underweight)</td>
                        </tr>
                        <tr>
                            <td style={ props.lastBmi>=18.5 && props.lastBmi<25 ? colorBmi : {} } >18.5 or more and less than 25</td>
                            <td>0 (Normal)</td>
                        </tr>
                        <tr>
                            <td style={ props.lastBmi>=25 && props.lastBmi<30 ? colorBmi : {} } >25 or more and less than 30 </td>
                            <td>+ (Overweight) </td>
                        </tr>
                        <tr>
                            <td  style={ props.lastBmi>=30? colorBmi : {} }   > 30 or more </td>
                            <td>++(Obess)</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
            </Box>
        </div>
    );

}

export default References;