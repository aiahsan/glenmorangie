import React from 'react';
import Avatar from '../../images/welcome/avatar.png';
import Crown from '../../images/welcome/crown.png'
import { ProgressBar } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import Prizes from '../../images/welcome/prizes.jpg';
import {useHistory} from 'react-router-dom';
import Tab from '../../components/tabcomponent'

const GroupButton = ({ title, size, desc }) => {
    return <div className="" >
        <div style={{backgroundColor:'#fead00',width:'100vw'}}>
               <h5 className="txt-mnth-et-1">{title}</h5>

           </div>

           <div className="sdfw32-3242d ">
               <div className="flex-main" >
                   <img src={Prizes} className="w-100" />
               </div>
               <div className="flex-main ml-2 ">
                   <div className="asdflj3-32424dsf">
                   <h5 className="asdfni230-23423sdfd">
                        {size}
                    </h5>
                    <p className="asdfh23i424-23423">{desc}</p>
                   </div>
               </div>
           </div>
        <div>
            
        </div>
    </div>
}

export default () => {
    const history=useHistory();

return <div className="welcome-1 bg-5 prof-cntr" style={{padding:0}} >
       <div>
           <div style={{backgroundColor:'#f88d2c',width:'100vw'}}>
               <h5 className="txt-mnth-et">Monthly Prize</h5>

           </div>
          <div>
          <GroupButton title="Top 2 Grand Prizes" size="1x" desc="House Party" />
          </div>
            <div className="mt-3">
            <GroupButton title="Top 3rd - 4th" size="1x" desc="Birthday Party" />
            </div>
            <div className="mt-3">
            <GroupButton title="Top 5th - 6th" size="1x" desc="Gelenmorangie Fire Flow" />
            </div>
          
            <div className="mt-3">
            <GroupButton title="Top 7th - 8th" size="1x" desc="Dining Experience" />
            </div>
            <div className="mt-3">
            <GroupButton title="Top 9th - 10th" size="1x" desc="Weeding Reception" />
            </div>
           <div className="jst-cnt mt-3">
           <button onClick={()=>history.goBack()} className="btn btn-viwe-prizes-sdf-1 mb-3" style={{backgroundColor:'#fc6c0f',width:150,marginBottom:'100px!important'}}>
           Back
       </button>
           </div>
          
       </div>
       <Tab/>

    </div>
}