import React from 'react';
import Tabb1 from '../images/buttons/b1.png'
import Tabb2 from '../images/buttons/b2.png'
import Tabb3 from '../images/buttons/b3.png'
import Tabb4 from '../images/buttons/b4.png'
import Tabb5 from '../images/buttons/b5.png'
import Tabb6 from '../images/buttons/b6.png'
import {useHistory} from 'react-router-dom'
export default ({style}) => {
    const history=useHistory();
    return <div className="cst-tab w-100" style={{...style}}>
        <button onClick={()=>history.push('/userprofile')} className="btn w-20p" >
            <img src={Tabb1} className="w-100" />
            <p className="sdfasihrr3-sf">Home</p>
        </button>
        <button onClick={()=>history.push('/scan')} className="btn w-20p" >
            <img src={Tabb2}   style={{width:'80%'}} />
            <p className="sdfasihrr3-sf">Scan</p>
        </button>
        <button onClick={()=>history.push('/Redeem')} className="btn w-20p" >
            <img src={Tabb3} className="" style={{width:'70%'}} />
            <p className="sdfasihrr3-sf">Rewards</p>
        </button>
        <button  className="btn w-20p" onClick={()=>history.push('/leaderboard')} >
            <img src={Tabb4}  style={{    width: '73%'}} />
            <p className="sdfasihrr3-sf" style={{fontSize:'0.5rem'}}>Leaderboard</p>
        </button>
        <button onClick={()=>history.push('/upload')} className="btn w-20p" >
            <img className="" src={Tabb5} style={{width:'80%'}} />
            <p className="sdfasihrr3-sf">Recipts</p>
        </button>
        <button className="btn w-20p" >
            <img className="w-100" src={Tabb6} />
            <p className="sdfasihrr3-sf">Giraf</p>
        </button>
    </div>
}