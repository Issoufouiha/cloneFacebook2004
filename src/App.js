import './App.css';
import NavBar from './component/Navbar';
import Sidebars from "./component/sidebars";
import Welcom from "./component/welcom";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Sidebars className='side'/>
        <Welcom/>

    </div>
  );
}

export default App;
