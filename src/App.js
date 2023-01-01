import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import TopNavbar from "./components/Navbar/TopNavbar"
import Auth from "./Pages/Auth"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Teams from "./Pages/Teams"
import Home from "./Pages/Home"
import AskQuestion from "./Pages/AskQuestion"
import './App.css';
import QuestionsPage from "./Pages/QuestionsPage"

function App() {
  return (
    <Router>
      <TopNavbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/AskQuestion" element={<AskQuestion/>}/>
        <Route path="/question/:id" element={<QuestionsPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
