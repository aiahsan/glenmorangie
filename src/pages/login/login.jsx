import React from 'react';
import Giraf from '../../images/welcome/geraf.png'
import Logo from '../../images/logo1.jpg'
import TextField, {HelperText, Input} from '@material/react-text-field';
import { useHistory } from "react-router-dom";

const GroupButton=({title,color})=>{
    const history = useHistory();

    return <div onClick={()=>history.push('/login')} className="login-radio m-8p " style={{backgroundColor:color?color:"white"}}>
              <input type="radio"  name="age" value="30"/>
              <label for="age1" className="lgn-radio-lbl m-0" >{title}</label>  

    </div>
}
export default () => {


    return <div className="welcome bg-5 jst-cnt-1">
        <div className="jst-str modal-cnt brd-radius ">
            <img src={Logo} className="dsafnw3-dasfi345-1" />
            <div >
            <h5 className="fnt-size-9 text-center l-h-0 age-head">
                You must be of
               
            </h5>
            <h5  className="fnt-size-9 text-center clr-primary age-head-1">
            21 YEARS OLD ABOVE &
            NON-MUSLIMS
            </h5>
            <h5 className="fnt-size-9 text-center l-h-0 age-head">
            to enter this site
            </h5>
           <div className="mt-4">
           <GroupButton color="#f88d2c" title="I'm 21 years old above & non-muslim"/>
            <GroupButton color="black" title="I'm 21 years old below OR I'm a muslim"/>
           </div>
           <p className="p-terms">
           By accessing this site you agree to accept our Terms and Conditions of Use,
and you also agree to receive EDM blast, event invitation and other campaign
folow up information and offers from Glemorangie.
           </p>
           <h5 className="text-center clr-primary age-head-1 f-s1rem mb-4">
           PLEASE DRINK RESPONSIBLY
            </h5>
            </div>
        </div>
    </div>
}