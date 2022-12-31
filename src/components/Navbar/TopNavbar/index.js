import {Link} from "react-router-dom"


import Avatar from "../../Avatar"

import "./index.css"
import stackimage from "../../../assets/stackOverFlow.png"
import searchlogo from  "../../../assets/searchlogo.svg"

const TopNavbar =()=>{

    var User = null

    return(
        <nav className="nav-container">
            <div className="navbar-container">
                <Link to="/">
                    <img src = {stackimage} alt="stackoverflow" className="stack-image nav-button-image" />
                </Link>
                <Link to="/about" className="nav-items nav-buttons">About</Link>
                <Link to="/products" className="nav-items nav-buttons">Products</Link>
                <Link to="/teams" className="nav-items nav-buttons">Teams</Link>
                <form>
                    <input type="search" className="input-text" placeholder="search"/>
                    <img src={searchlogo} alt="search" className="search-image"/>
                </form>
                {User === null ? 
                <Link to="/Auth" className="nav-items nav-buttons log-in">Log In</Link> :
                <>
                <Link to="/"><Avatar></Avatar></Link>
                <button type="button" className="nav-items nav-buttons log-in">Log Out</button>
                </>
                
            }



            </div>
        </nav>
    )
}

export default TopNavbar