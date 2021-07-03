import React, { useState } from 'react';
import Vocher from '../../images/welcome/vocher.jpg'
import { ProgressBar } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import Point from '../../images/welcome/giragbox.png'
import Tab from '../../components/tabcomponent'
import { useHistory } from "react-router-dom";

const GroupButton = ({ src, isredeemd }) => {
    const history = useHistory();

  return <div className="login-radio mt-2 flx-clmn   " style={{ width: 335 }}>
        <div className="jst-cnt">
            <img style={{ width: 320, height: 119 }} src={src} />

        </div>
        <button onClick={()=>history.push('/vocher')} className="stl-lgn-2 mt-3" style={{ color: isredeemd ? '#d6d3d3' : 'white', borderColor: isredeemd ? '#d6d3d3' : '#63bf00', backgroundColor: isredeemd ? "#b3b3b3" : "#63bf00", border: 'none' }}>
            <h5>{isredeemd ? "Redeemed" : "Redeem"}</h5>
        </button>
    </div>
}
export default () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <> <div className="welcome bg-5 " >

        <div className="prof-cntr jst-cnt flx-clmn" style={{ overflow: 'scroll' }}>
            <h1 className="user-name-prf mt-2">Bebel</h1>
            <p className="lbl-username">John Doe</p>
            <div className="jst-cnt-1 mt-m31">
                <div className="jst-cnt1 mr-5"  style={{marginLeft:'-32%'}}>

                    <p className="icon-nsdf mt-3">Points earned</p>
                </div>
                <div className="jst-cnt1">

                    <p className="icon-nsdf mt-3">100</p>
                </div>
            </div>
            <div className="m-topope">
                <GroupButton src={Vocher} isredeemd={true} />
                <GroupButton src={Vocher} isredeemd={false} />

            </div>
            <p className="rdm-desc-1">The points redemption system will renew every month,
please earn and claim your voucher within this month</p>
            <button className="stl-lgn mt-3" style={{ color: '#d6d3d3', border: 'none' }}>
                <h5>Back</h5>
            </button>
        </div>
        <Modal show={show} style={{ padding: '5%', marginTop: '15%', borderRadius: 20 }} onHide={handleClose}>
            <Modal.Header style={{ border: 'none' }} closeButton>
            </Modal.Header>

            <div className="jst-cnt flx-clmn p-4 mr-n3-4" >
                <h1 className="yeah-ft">
                    Congrats!
        </h1>
                <h5 className="fnt-size-9 text-center clr-primary age-head-2">You’ve claimed the voucher!</h5>
                <img src={Point} style={{ width: '85%' }} />
                <div className="jst-cnt">
                    <h1 className="yeah-ft">
                        RM80
        </h1>
                    <p className="text-center clr-primary age-head-2 safa3-43sds">
                        OFF
        </p>
                </div>
                <h5 className="fnt-size-9  age-head-2 sad3u4032ds">Shopee Voucher
                on your next
</h5>
                <h5 className="fnt-size-9  age-head-2 sad3u4032ds mt-n2">Glenmorangie Purchase
</h5>
            </div>
        </Modal>
    </div>
    <Tab />
    </>
}