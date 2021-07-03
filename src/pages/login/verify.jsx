import React from 'react';
import Logo from '../../images/logo.png'
import TextField, { HelperText, Input } from '@material/react-text-field';
import {useDispatch} from 'react-redux'
import {Login} from '../../redux/actionMethodes/User/index'
export default () => {
    const dispatch=useDispatch();
    const handleSubmit=()=>{
        dispatch(Login({
            username:'user',
            email:'user@emai.com',
            token:'123456789'
        }))
    }

    return <div className="welcome bg-5 jst-cnt-1 pt-5">
             <img src={Logo} className="w-100 brd-radius pl-3 pr-3" />
        <div className="jst-str modal-cnt brd-radius ">
            <div className="stl-lgn p-rlt-b-30">
                <h5>Log In</h5>
            </div>
            <TextField
                style={{ backgroundColor: 'white' }
                }
                label='Enter mobile phone no.'
            ><Input

                />
            </TextField>

            <div onClick={()=>handleSubmit()} className="stl-lgn mt-4">
                <h5>Let's go</h5>
            </div>
            <p className="mt-3 p-terms1">I’m above 21 years old & Non-Muslim
Terms & Conditions</p>
        </div>

    </div>
}