import React from 'react';
import Logo from '../../images/logo.png';
import Giraf from '../../images/welcome/geraf.png'
import {AiOutlineCamera} from 'react-icons/ai'
import {RiGalleryLine} from 'react-icons/ri'
import Tab from '../../components/tabcomponent';
import {useHistory} from 'react-router-dom';

export default () => {
    const history=useHistory();

    return <>
    <div className="welcome" style={{backgroundColor:'#7e3607'}}>
        <div className="flex-main">
            <div className="welcome-inner-1">

                <div className="mt-4">
                    <h2 className="text-center color-white" style={{fontSize: '1.2rem'}}>SNAP A PHOTO OF YOUR RECEIPT</h2>
                    <h5 className="text-center color-white dsagjierh3-wra">Please ensure the details of the purchase
outlet, date of purchase, receipt number
and product name are visible.</h5>
                </div>
            </div>
        </div>
        <div className="dasfj9324-3423">
        <div>
                <button onClick={() => console.log()} className="stl-lgn mt-4 mb-3 mr-1" style={{border:'none'}}>
                    <h5><AiOutlineCamera/>Camera</h5>
                </button>
                <button onClick={() => console.log()} className="stl-lgn mt-4 mb-3" style={{border:'none'}}>
                    <h5> <RiGalleryLine /> Gallery</h5>
                </button>
            </div>
        </div>
        
    </div>
            <Tab  />

            </>
}