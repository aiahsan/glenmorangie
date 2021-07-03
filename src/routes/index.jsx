import Welcome from '../pages/welcome/welcome';
import Uploadprofile from '../pages/selfieandname/selfieandname';
import UserProfile from '../pages/profile/profile';
import Scan from '../pages/scan/scan';
import Upload from '../pages/upload/upload-2';
import Upload2 from '../pages/upload/upload';
import Upload3 from '../pages/upload/upload-3';
import Redeem from '../pages/redeem/redeem';
import Vocher from '../pages/redeem/vochercode';
import LeaderBoard from '../pages/LEADERBOARD/leaderboard'
import Monthlyprize from '../pages/LEADERBOARD/monthlyprize'
var BASEDIR = process.env.REACT_APP_BASEDIR;

var indexRoutes = [
    { path: "/welcome", name: "welcome", component: Welcome },
    { path: "/Uploadprofile", name: "uploadprofile", component: Uploadprofile },
    { path: "/userprofile", name: "userprofile", component: UserProfile },
    { path: "/upload", name: "uploadrecipi", component: Upload },
    { path: "/upload2", name: "uploadrecipi2", component: Upload2 },
    { path: "/upload3", name: "uploadrecipi3", component: Upload3 },
    { path: "/scan", name: "scan", component: Scan },
    { path: "/redeem", name: "redeem", component: Redeem },
    { path: "/vocher", name: "vocher", component: Vocher },
    { path: "/leaderboard", name: "leaderboard", component: LeaderBoard },
    { path: "/monthlyprize", name: "monthlyprize", component: Monthlyprize },
    { path: "/", name: "welcome", component: Welcome },
];


export default indexRoutes;
