import { NavLink } from "react-router-dom"
import "./index.css"

import earthLogo from "../../assets/earthlogo.svg"


const Leftsidebar =()=>{
    return(
        <aside className="leftsidebar-container">
           <NavLink to="/" activeClassName ="active" className="nav-links" style={{"padding-left":"20px"}}>Home</NavLink>
           <p className="public-text">Public</p>
           <NavLink className="side-navs nav-links" to="/questions"activeClassName ="active">
                <img src={earthLogo}  alt="logo" className="earth-image"/>
                 <h4>Questions</h4>
            </NavLink>
            <div className="container-a">
                <NavLink to="/tags" className="nav-links" activeClassName ="active">Tags</NavLink>
                <NavLink to="/users" className="nav-links" activeClassName ="active">Users</NavLink>
            </div>
            
        </aside>
    ) 
}

export default Leftsidebar