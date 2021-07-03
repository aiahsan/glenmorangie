import React from 'react';
import Avatar from '../../images/welcome/avatar.png';
import Crown from '../../images/welcome/crown.png'
import { ProgressBar } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import Tab from '../../components/tabcomponent';
import {useHistory} from 'react-router-dom'
import {BsTriangleFill} from 'react-icons/bs'
const GroupButton = ({ rank,title, src, progress_title, range, desc,icon }) => {
    return <div className="login-radio sdjf2308we34" >
        <div className="jst-cnt">
            <h2 className="bkdsfrer-sdfn3">{rank}</h2>
            <img style={{ width: 53,borderRadius:'50%' }} src={src} />
            <div className="qokcmn-xznci4" >
                <h5 className="ft-w-700 clr-primary">{title}</h5>
                <p className="lbl8932fs-s asdfnhi34pasda-asd">{desc}</p>
                
            </div>
        </div>
        <div>
        {icon}
   
        </div>
    </div>
}
export default () => {
    const history=useHistory();
    return <>
    <div className="welcome-1 bg-5 prof-cntr"  >

<div className="jst-cnt flx-clmn" style={{overflow:'scroll'}}>
<div className="mt-n1 " style={{zIndex:11}} >
       <button className="btn btn-week-ldbrdf" onClick={()=>history.push('/monthlyprize')}>
           This Week
       </button>
       <button className="btn btn-month-ldbrdf ml-2" onClick={()=>history.push('/monthlyprize')}>
           This Month
       </button>
   </div>


   <div className="jst-cnt mt-n5">
   <div className="w-100 jst-cnt flx-clmn" style={{marginTop:'19%',marginRight:'-10%'}} >
   <div className="">
<h2 className="cr-2we0934">2</h2>
</div>
<img src={Avatar} className="avatar-img" style={{    width: '90px',border:'3px solid white'}} />
<h1 className="user-name-prf-1">Sun</h1>
   <p className="lbl-username" style={{marginTop: '-10%'}}>15,000</p>
</div>
<div className="w-100 jst-cnt flx-clmn"  style={{position:'relative',zIndex:3}}>
<div className="crn-bx-34">
<img src={Crown} className="img-crown-sdfa3 "  />
<h2 className="cr-1we0934">1</h2>
</div>

<img src={Avatar} className="avatar-img" style={{width: '130px'}} />
   <h1 className="user-name-prf-1">Bebel</h1>
   <p className="lbl-username" style={{marginTop: '-10%'}}>15,000</p>
</div>
<div className="w-100 jst-cnt flx-clmn" style={{marginTop:'19%',marginLeft:'-10%',position:'relative',zIndex:2}}>
<div className="">
<h2 className="cr-2we0934">3</h2>
</div>
<img src={Avatar} className="avatar-img" style={{    width: '90px',border:'3px solid white'}} />
<h1 className="user-name-prf-1">Kim</h1>
   <p className="lbl-username" style={{marginTop: '-10%'}}>9,000</p>
</div>
   </div>

 
   <button className="btn btn-viwe-prizes-sdf mb-2">
           View Prizes
       </button>
 
   <GroupButton rank="1" src={Avatar} title="Name"  desc="xxxx pts" icon={<BsTriangleFill color="#00cc00" style={{marginRight:20,fontSize:25}}/>} />
   <GroupButton rank="2" src={Avatar} title="Name"  desc="xxxx pts" icon={<BsTriangleFill color="#d44558" style={{marginRight:20,fontSize:25,transform:'rotate(60deg)'}}/>} />
   <GroupButton rank="3" src={Avatar} title="Name"  desc="xxxx pts" icon={<div>
    <div>
        <BsTriangleFill color="#abacb0" style={{marginRight:22,fontSize:25}}/>
   </div>
    <div style={{marginLeft:3}}>
        <BsTriangleFill color="#abacb0" style={{marginRight:20,fontSize:25,transform:'rotate(60deg)'}}/>
   </div>
   </div>} />
   <GroupButton rank="4" src={Avatar} title="Name"  desc="xxxx pts" icon={<BsTriangleFill color="#00cc00" style={{marginRight:20,fontSize:25}}/>} />
   <button className="btn btn-viwe-prizes-sdf-1 mb-4" style={{backgroundColor:'#fc6c0f',width:150,marginBottom:'100px!important'}}>
           Back
       </button>
</div>
</div>
<Tab />

</>
}