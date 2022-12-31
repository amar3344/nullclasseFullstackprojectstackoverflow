import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import TopNavbar from "./components/Navbar/TopNavbar"
import Auth from "./components/Auth"
import About from "./components/About"
import Products from "./components/Products"
import Teams from "./components/Teams"
import Home from "./components/Home"
import AskQuestion from "./components/AskQuestion"
import QuestionsPage from "./components/QuestionsPage"
import './App.css';

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
        <Route path="/questions" element={<QuestionsPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
