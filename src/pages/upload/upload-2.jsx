import React from 'react';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Bottle from '../../images/welcome/bt1.png'
import Bottle1 from '../../images/welcome/bt2.png'
import {FiMinus, FiPlus} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';
import Tab from '../../components/tabcomponent';
export default () => {

    const history=useHistory();
    return <>
    <div className="welcome  bg-5 prof-cntr" >
        <h1 className="user-name-prf mt-4">Bebel</h1>
        <p className="lbl-username">John Doe</p>
        <p className="teekls34-sdas-21312">Select your purchase</p>
       
    <div className="sdafjhi43-34">
    <div style={{marginRight:10}} >
            
            <button className="btn asf98as0d-asd p-2" >
            <img style={{width:70,height:70}} src={Bottle}  />
            <button onClick={() => console.log()} className="stl-lgn maskdfhiw334 ">
                <h5 className="ctlbtn-h5sda2" style={{paddingLeft: 1,paddingRight:1}}>Cocktail</h5>
            </button>
        
            </button>
        <div>
            
        </div>
        </div>
    
        <div>
            
            <button className="btn asf98as0d-asd p-2" >
            <img style={{width:70,height:70}} src={Bottle1}  />
            <button onClick={() => console.log()} className="stl-lgn maskdfhiw334 ">
                <h5 className="ctlbtn-h5sda2">Bottle</h5>
            </button>
            </button>
        </div>
    
    </div>
   
       <div className="jst-str prf-form prf-form-maing w-100 pt-4" >
            <div className="jst-cnt">
                <div>
                    <button className="btn">
                        <FiPlus/>
                    </button>
                    <input type="text" style={{width:30}} />
                    <button className="btn">
                    <FiMinus/>
                    </button>
                </div>
                <div>
                    <button className="btn">
                        <FiPlus/>
                    </button>
                    <input type="text" style={{width:30}} />
                    <button className="btn">
                    <FiMinus/>
                    </button>
                </div>
            </div>
            <TextField
                className="prf-feild"


                label='Outlet name'
            ><Input

                />
            </TextField>
            <TextField
                className="prf-feild"


                label='Purchase Date'
            ><Input

                />
            </TextField>
            <TextField
                className="prf-feild"


                label='Receipt Number'
            ><Input

                />
            </TextField>
            <TextField
                className="prf-feild"


                label='Amount (RM)'
            ><Input

                />
            </TextField>

            <button onClick={() =>history.push('upload2')}   className="stl-lgn mt-4 mb-3">
                <h5>Next</h5>
            </button>
            

        </div>
    </div>
    <Tab style={{marginTop:45}} />

    </>
}