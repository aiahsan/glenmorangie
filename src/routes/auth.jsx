import Register from '../pages/login/login';
import Login from '../pages/login/verify';

var BASEDIR = process.env.REACT_APP_BASEDIR;

var indexRoutes = [
    { path: "/register", name: "register", component: Register },
    { path: "/login", name: "login", component: Login },
    { path: "/", name: "login", component: Register },
];


export default indexRoutes;
