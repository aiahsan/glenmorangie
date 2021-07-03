import React, { useState } from 'react';
import Logo from '../../images/logo1.jpg'
import TextField, { HelperText, Input } from '@material/react-text-field';
import Giraf from '../../images/welcome/geraf.png'
import Arrow from '../../images/welcome/btm-leafs.png'
import { Modal, Button } from 'react-bootstrap';
import Point from '../../images/welcome/pt.png'
import {AiOutlineCamera} from 'react-icons/ai'
import {RiGalleryLine} from 'react-icons/ri';
import {useHistory} from 'react-router-dom'
export default () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history=useHistory();
    return <><div className="welcome-1 bg-7"  >

        <div className="up-prf-box" >
            <div className="p-rlt-b-30 up-prf-box-lbl">
                UPDATE YOUR
                PROFILE
        </div>
            <p className="up-prf-box-12312124">
                Let’s begin your adventure by update your
                profile with your selfie and a username.
       </p>
        </div>


        <div className="jst-str prf-form prf-form-maing-1" style={{zIndex:1}} >
            <div className="img-bx-cntr">

            </div>
            <div>
                <button onClick={() => handleShow()} className="stl-lgn mt-4 mb-3 mr-1" style={{border:'none'}}>
                    <h5><AiOutlineCamera/>Camera</h5>
                </button>
                <button onClick={() => handleShow()} className="stl-lgn mt-4 mb-3" style={{border:'none'}}>
                    <h5> <RiGalleryLine /> Gallery</h5>
                </button>
            </div>
            <TextField
                className="prf-feild"


                label='Enter your username'
            ><Input

                />
            </TextField>


            <button onClick={() => history.push('userprofile')} className="stl-lgn mt-1 mb-2" style={{border:'none'}}>
                <h5>Submit</h5>
            </button>

        </div>
        <img src={Arrow} className="img-btm-prf-lrft-1" />
    </div>
        <Modal show={show} style={{ padding: '5%', marginTop: '15%', borderRadius: 20 }} onHide={handleClose}>
            <Modal.Header style={{ border: 'none' }} closeButton >
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