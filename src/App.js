// import logo from './logo.svg';
import './App.css';
import { RoutesApp } from './components/AllRoutes/RoutesApp';
import { Copy } from './components/Copy';
import MiniDrawer from './components/PersistentDrawer';
import PersistentDrawerLeft from './components/PersistentDrawer';



function App() {
  return (
    <div className="App">
 <RoutesApp/>

 {/* <MiniDrawer/> */}
     
    </div>
  );
}

export default App;
