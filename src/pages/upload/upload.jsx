import React, { useState } from 'react';
import Vocher from '../../images/welcome/vocher.jpg'
import { Dropdown } from 'react-bootstrap'
import Tab from '../../components/tabcomponent';
import {useHistory} from 'react-router-dom';

export default () => {

    const history=useHistory();

    return <>
     <div className="welcome bg-5 " >

        <div className="prof-cntr jst-cnt flx-clmn mt-5" >

            <div className="shdfi8332-23">
                <div className="w-100">
                    <button className="btn w-100 upd-btn-rwe973 asdasf-2342sad2" >
                        <h5>Cocktail</h5>
                    </button>
                </div>
                <div className="w-100">
                    <button className="btn w-100 upd-btn-rwe973-active asdasf-2342sad2" >
                        <h5>Bottle</h5>
                    </button>
                </div>
            </div>
            <p className="teekls34-sdas">Select the Retail</p>
            <Dropdown className="w-80pp">
                <Dropdown.Toggle className="asdofjo34-352" id="dropdown-basic">
                    Select the state
  </Dropdown.Toggle>

         
            </Dropdown>

            <Dropdown className="w-80pp">
                <Dropdown.Toggle className="asdofjo34-352" id="dropdown-basic">
                    Select the Area
  </Dropdown.Toggle>

                <Dropdown.Menu className="asdf239-234hhs">
                 
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="w-80pp">
                <Dropdown.Toggle className="asdofjo34-352" id="dropdown-basic">
                    Select the Store
  </Dropdown.Toggle>

  <Dropdown.Menu className="asdf239-234hhs">
                    <Dropdown.Item href="#/action-1">Store 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Store 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Store 3</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Store 4</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <button onClick={()=>history.push('upload3')} className="stl-lgn mt-35p" style={{ color: '#d6d3d3', borderColor: '#fd6c0f', backgroundColor: "#fd6c0f",marginTop:'4rem' }}>
                <h5>Next</h5>
            </button>

        </div>

    </div>
        <Tab  />

    </>
}