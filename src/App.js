import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import TopNavbar from "./components/Navbar/TopNavbar"
import SideNavbar from "./components/Navbar/SideNavbar"
import Auth from "./components/Auth"
import About from "./components/About"
import Products from "./components/Products"
import Teams from "./components/Teams"
import './App.css';

function App() {
  return (
    <Router>
      <TopNavbar/>
      <SideNavbar/>
      <Routes>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/teams" element={<Teams/>}/>
      </Routes>

    </Router>
  );
}

export default App;
