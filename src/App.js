// import logo from './logo.svg';
import './App.css';
import { RoutesApp } from './components/AllRoutes/RoutesApp';
import { Copy } from './components/Copy';
import MiniDrawer from './components/PersistentDrawer';
import PersistentDrawerLeft from './components/PersistentDrawer';
import { PortalNavbar } from './components/PortalNavbar';
import {Stack} from './components/Stack'
import MenuListComposition from './components/MaterialCom';



function App() {
  return (
    <div className="App">
 {/* <RoutesApp/> */}
<PortalNavbar/>

 {/* <MiniDrawer/> */}
     
    </div>
  );
}

export default App;
