import React,{useEffect} from 'react';
import { createBrowserHistory } from 'history';
import auth from '../routes/auth';
import approutes from '../routes/index';
import {useDispatch,useSelector} from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  const hist = createBrowserHistory();

const MainApp= ()=>{
    const user=useSelector(x=>x.User)
 

return   <Router history={hist} basename={process.env.REACT_APP_BASEDIR}>
    <Switch>
        {user!=null?approutes.map((prop,key) => {
                //console.log(prop.path + prop.key);
                return ( 
                    <Route
                        path={prop.path}
                        key={key}
                        component={prop.component}
                    />
                );
            }):
            auth.map((prop,key) => {
                //console.log(prop.path + prop.key);
                return ( 
                    <Route
                        path={prop.path}
                        key={key}
                        component={prop.component}
                    />
                );
            })
        }
    </Switch>
</Router>

}
export default MainApp;