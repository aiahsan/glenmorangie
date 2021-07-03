import React, { useState } from 'react';
import Vocher from '../../images/welcome/vocher.jpg'
import Tab from '../../components/tabcomponent'
import { useHistory } from "react-router-dom";

const GroupButton = ({ src, isredeemd }) => {
    return <div className="login-radio mt-2 flx-clmn   " style={{ width: 335 }}>
        <div className="jst-cnt">
            <img style={{ width: 320, height: 119 }} src={src} />

        </div>
        <button className="stl-lgn mt-3" style={{ color: isredeemd ? '#d6d3d3' : 'white', borderColor: isredeemd ? '#d6d3d3' : '#63bf00', backgroundColor: isredeemd ? "#b3b3b3" : "#63bf00" }}>
            <h5>{isredeemd ? "Redeemed" : "Redeem"}</h5>
        </button>
    </div>
}
export default () => {
    const history = useHistory();

   
    return <><div className="welcome bg-5 " >

        <div className="prof-cntr jst-cnt flx-clmn" style={{ overflow: 'scroll' }}>
            <h1 className="jasdf8iw33-23">Your Voucher
Code:</h1>
            <h1 className="jasdf8iw33-231">XXXX</h1>
            
            <p className="sdfu3240-231">Use this voucher code
to buy Glenmorangie
on Shopee now in
7 days!</p>
            <button onClick={()=>history.goBack()} className="stl-lgn" style={{ color: '#d6d3d3', borderColor: '#fd6c0f', backgroundColor: "#fd6c0f",marginTop:'4rem' }}>
                <h5>Back</h5>
            </button>
        </div>

         </div>
                 <Tab />
</>
}