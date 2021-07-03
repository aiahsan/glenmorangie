import React, { useState } from 'react';
import Tab from '../../components/tabcomponent'
import { Modal, Button } from 'react-bootstrap';
import Point from '../../images/welcome/1avatar.png'
import Av1 from '../../images/welcome/2avatar.png'
import Av3 from '../../images/welcome/3avatar.png'

export default () => {
    const [show, setShow] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
    });
    const handleClose = (type) => {
        switch (type) {
            case 1:
                setShow({ ...show, modal1: false })
                break;
            case 2:
                setShow({ ...show, modal2: false })
                break;
            case 3:
                setShow({ ...show, modal3: false })
                break;
        }
    }
    const handleShow = (type) => {
        switch (type) {
            case 1:
                setShow({ ...show, modal1: true })
                break;
            case 2:
                setShow({ ...show, modal2: true })
                break;
            case 3:
                setShow({ ...show, modal3: true })
                break;
        }
    }
    return <><div className="welcome bg-scan prof-cntr"  >

        <Modal show={show.modal1} style={{ padding: '3%', marginTop: '15%', borderRadius: 20 }} onHide={() => handleClose(1)}>
            <Modal.Header style={{ border: 'none' }} closeButton>
            </Modal.Header>

            <div className="jst-cnt flx-clmn p-4 mr-n3-4" >
                <img src={Point} className="w-60P dsfhsdi3-343" />
                <h5 className="fnt-size-9 text-center clr-primary age-head-2" style={{ fontSize: '1.4rem', marginTop: '55%' }}>You’ve found</h5>
                <h1 className="yeah-ft" style={{ marginTop: -17, fontSize: '2.5rem' }}>
                    Rare
                </h1>
                <div>
                    <img style={{ width: 40 }} src={Av1} />
                    <img src={Av1} style={{ width: 40 }} className="ml-2" />
                    <img src={Av1} style={{ width: 40 }} className="ml-2" />
                </div>
                <p style={{ fontWeight: 700, marginTop: 2 }}>Daily Limit : 1/3</p>
                <p style={{ fontWeight: 700, marginTop: 4, color: '#fc6c0f' }}>You have earned</p>
                <p className="sdafik38-324">3<p className="dsfjiwoy0340-34df">points</p></p>
                <p style={{ fontWeight: 700, marginTop: 4, color: '#fc6c0f', textAlign: 'center', marginTop: -40 }}>Do you want to upload
your receipt?</p>
                <div className="jst-cnt mt-n4">
                    <button onClick={() => handleShow()} style={{ zIndex: 10, width: '100%' }} className="stl-lgn mt-4 mb-3">
                        <h5>Yes</h5>
                    </button>
                    <button onClick={() => handleShow()} style={{ zIndex: 10, width: '100%' }} className="stl-lgn mt-4 mb-3">
                        <h5>No</h5>
                    </button>
                </div>
            </div>
        </Modal>
        <Modal show={show.modal2} style={{ padding: '3%', marginTop: '15%', borderRadius: 20 }} onHide={() => handleClose(2)}>
            <Modal.Header style={{ border: 'none' }} closeButton>
            </Modal.Header>

            <div className="jst-cnt flx-clmn p-4 mr-n3-4" >
                <img src={Av3} className="w-60P dsfhsdi3-343" style={{ top: -77 }} />
                <h1 className="yeah-ft" style={{ marginTop: -17, fontSize: '2.5rem', marginTop: '40%' }}>
                    Yikes!
                </h1>
                <p style={{ fontWeight: 700, marginTop: 4, color: '#fc6c0f', marginTop: '20%', textAlign: 'center' }}>I’m sorry. It seems like
                you had scanned this
Unique Giraffe today. </p>
                <p style={{ fontWeight: 500, lineHeight: 1, marginTop: 4, color: '#fc6c0f', textAlign: 'center', marginTop: '20%', width: 180 }}>Do you want to upload
your receipt?</p>
                <div className="jst-cnt mt-n4">
                    <button onClick={() => handleShow()} style={{ zIndex: 10, width: '100%' }} className="stl-lgn mt-4 mb-3">
                        <h5>Yes</h5>
                    </button>
                    <button onClick={() => handleShow()} style={{ zIndex: 10, width: '100%' }} className="stl-lgn mt-4 mb-3">
                        <h5>No</h5>
                    </button>
                </div>
            </div>
        </Modal>
        <Modal show={show.modal3} style={{ padding: '3%', marginTop: '15%', borderRadius: 20 }} onHide={() => handleClose(3)}>
            <Modal.Header style={{ border: 'none' }} closeButton>
            </Modal.Header>

            <div className="jst-cnt flx-clmn p-4 mr-n3-4" >
                <img src={Av3} className="w-60P dsfhsdi3-343" style={{ top: -77 }} />
                <h1 className="yeah-ft" style={{ marginTop: -17, fontSize: '2.5rem', marginTop: '40%' }}>
                    Yikes!
                </h1>
                <p style={{ fontWeight: 700, marginTop: 4, color: '#fc6c0f', marginTop: '20%', textAlign: 'center' }}>I’m sorry. You have
                reached your total cocktail
purchase for today. </p>
                <p style={{ fontWeight: 500, lineHeight: 1, marginTop: 4, color: '#fc6c0f', textAlign: 'center', marginTop: '10%', width: 180 }}>Please come back
tomorrow.</p>
                <div className="jst-cnt mt-n4" style={{marginTop:'10%'}}>
                    <button onClick={() => handleShow()} style={{ zIndex: 10, width: '100%' }} className="stl-lgn mt-4 mb-3">
                        <h5>Back</h5>
                    </button>
                </div>
            </div>
        </Modal>

    </div>
    <Tab />

    </>
}