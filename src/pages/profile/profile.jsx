import React from 'react';
import Giraf from '../../images/welcome/geraf.png'
import Logo from '../../images/logo1.jpg'
import TextField, { HelperText, Input } from '@material/react-text-field';
import Avatar from '../../images/welcome/avatar.png';
import Badge from '../../images/welcome/badge.png';
import Star from '../../images/welcome/star.png';
import QR from '../../images/welcome/qr.png'
import Recipt from '../../images/welcome/recipt.png'
import Leader from '../../images/welcome/leader.png'
import Prize from '../../images/welcome/prize.png'
import { ProgressBar } from 'react-bootstrap';
import Tab from '../../components/tabcomponent'
const GroupButton = ({ title, src, progress_title, range, desc,stl }) => {
    return <div className="login-radio m-8p" style={{ backgroundColor: "white" ,width: 335,...stl}}>
        <div className="jst-cnt">
            <img style={{ width: 66 }} src={src} />
            <div style={{
                marginLeft: 10
            }}>
                <h5 className="ft-w-700">{title}</h5>
                <p className="lbl8932fs-s">{desc}</p>
                <div className="jst-cnt mt-n15" >
                   <div> <ProgressBar  style={{ width: 165 }} now={range} /></div>
                    <p className="sadfe3-43">{progress_title}</p>
                </div>
            </div>
        </div>

    </div>
}
export default () => {
    return <div className="welcome-1 bg-5 prof-cntr" >
        <img src={Avatar} className="avatar-img" />
        <h1 className="user-name-prf">Bebel</h1>
        <p className="lbl-username">John Doe</p>
        <div className="jst-cnt">
            <div className="jst-cnt mr-5" >
                <img className="w-70" src={Badge} />
                <p className="icon-nsdf mt-3">100</p>
            </div>
            <div className="jst-cnt">
                <img className="w-70" src={Star} />
                <p className="icon-nsdf mt-3">10</p>
            </div>
        </div>
        <GroupButton src={QR} title="Scan" progress_title="2/3" range="70" desc="1 time left today" />
        <GroupButton src={Prize} title="Rewards" progress_title="500/500" range="100" desc="1 time left today" />
        <GroupButton src={Leader} title="Leaderboard" progress_title="49/300" range="20" desc="1 time left today" />
        <GroupButton stl={{marginBottom:10}} src={Recipt} title="Recipts" progress_title="4/5" range="85" desc="1 time left today" />
       
        <Tab/>
    </div>
}