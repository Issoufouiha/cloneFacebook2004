import './App.css';
import NavBar from './component/Navbar';
import Sidebars from "./component/sidebars";
import Welcom from "./component/welcom";
import Footer from './component/footer';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <div style={{display:'flex'}}>
          <Sidebars/>
          <Welcom/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
