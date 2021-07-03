import React, { useState } from 'react';
import Logo from '../../images/logo1.jpg'
import TextField, { HelperText, Input } from '@material/react-text-field';
import Giraf from '../../images/welcome/geraf.png'
import Arrow from '../../images/welcome/arrow.png'
import { Modal, Button } from 'react-bootstrap';
import Point from '../../images/welcome/pt.png'
export default () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <><div className="welcome bg-6 jst-cnt-1 "  >

        <div className="p-rlt-b-30">

        </div>
        <div className="jst-spb ml-5 mr-5 ">
            <h5 className="prf-h5">Profile</h5>
            <img className="img-grf-prf" src={Giraf} />
        </div>
        <div className="jst-str prf-form prf-form-maing w-100" >

            <TextField
                className="prf-feild"


                label='First Name'
            ><Input

                />
            </TextField>
            <TextField
                className="prf-feild"


                label='Last Name'
            ><Input

                />
            </TextField>
            <TextField
                className="prf-feild"


                label='Email'
            ><Input

                />
            </TextField>
            <TextField
                className="prf-feild"


                label='Identification no. / Passport no.'
            ><Input

                />
            </TextField>

            <button onClick={() => handleShow()} style={{ zIndex: 10 }} className="stl-lgn mt-4 mb-3">
                <h5>Submit</h5>
            </button>

        </div>
        <img src={Arrow} className="img-btm-prf-lrft" />
    </div>
        <Modal show={show} style={{ padding: '5%',marginTop:'15%',borderRadius:20 }} onHide={handleClose}>
            <Modal.Header style={{border:'none'}} closeButton>
            </Modal.Header>

            <div className="jst-cnt flx-clmn p-4 mr-n3-4" >
                <h1 className="yeah-ft">
                    Yeay!
        </h1>
                <img src={Point} className="w-60P" />
                <h5 className="fnt-size-9 text-center clr-primary age-head-2">Congrats! You’re rewarded
                with 100 POINTS for your
new sign up.</h5>
                <button onClick={() => handleShow()} style={{ zIndex: 10 }} className="stl-lgn mt-4 mb-3">
                    <h5>Continue</h5>
                </button>
            </div>
        </Modal>
    </>
}