import React, { useState } from 'react';

import TextField, { HelperText, Input } from '@material/react-text-field';
import { RiDeleteBack2Line } from 'react-icons/ri'
export default () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <><div className="welcome-1 bg-9"  >

        <div className="up-prf-box" >
            <div className="p-rlt-b-30 up-prf-box-lbl-1">
                Verfication Code
        </div>
            <p className="up-prf-box-2180sad">
                Please enter the 4-digit OTP code sent to +60 16xxxx 412
       </p>
        </div>

        <div className="jst-cnt mt-4">
            <TextField
                style={{ backgroundColor: 'transparent', width: 50, }

                }
                label='1'
                className="cshdkr-erywe8"
            ><Input

                />
            </TextField>
            <TextField
                style={{ backgroundColor: 'transparent', width: 50, }

                }
                label='1'
                className="cshdkr-erywe8 ml-3"
            ><Input

                />
            </TextField>
            <TextField
                style={{ backgroundColor: 'transparent', width: 50, }

                }
                label='1'
                className="cshdkr-erywe8 ml-3"
            ><Input

                />
            </TextField>
            <TextField
                style={{ backgroundColor: 'transparent', width: 50, }

                }
                label='1'
                className="cshdkr-erywe8 ml-3"
            ><Input

                />
            </TextField>
        </div>
        <button className="stl-lgn-1" style={{ color: '#d6d3d3', borderColor: '#fd6c0f', backgroundColor: "#fd6c0f", marginTop: '1.3rem', width: 130, alignSelf: 'center' }}>
            <h5>Submit</h5>
        </button>
        <p className="up-prf-box-2180sad-1 mt-2">
            If you didn't recive a code, <p style={{ fontSize: '1rem', fontWeight: 500 }}> Resend</p>
        </p>


        <div className="jst-cnt flx-clmn" style={{position: 'relative',top: -29}}>
            <div className="otp-btn-sdjr">
                <button className="btn">
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>1</h5>
                </button>
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>2</h5>
                </button>
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>3</h5>
                </button>
            </div>
            <div className="otp-btn-sdjr">
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>4</h5>
                </button>
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>5</h5>
                </button>
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>6</h5>
                </button>
            </div>
            <div className="otp-btn-sdjr">
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>7</h5>
                </button>
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>8</h5>
                </button>
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>9</h5>
                </button>
            </div>
            <div className="otp-btn-sdjr">
                <button className="btn">
                    <h5></h5>
                </button>
                <button className="btn" style={{ position: ' relative', left: 19 }}>
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}>0</h5>
                </button>
                <button className="btn" >
                    <h5 style={{ color: 'white', fontSize: '2.5rem' }}><RiDeleteBack2Line /></h5>
                </button>
            </div>
        </div>
    </div>
    </>
}