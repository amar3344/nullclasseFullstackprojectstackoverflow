import {Link} from "react-router-dom"

import Button from "../Button"
import Avatar from "../Avatar"

import "./index.css"
import stackimage from "..//../assets/stacklogo.png"
import searchlogo from  "..//../assets/searchlogo.svg"

const Navbar =()=>{

    var User = null

    return(
        <nav>
            <div className="navbar-container">
                <Link to="/">
                    <img src = {stackimage} alt="stackoverflow" className="stack-image" />
                </Link>
                <Link to="/" className="nav-items nav-buttons">About</Link>
                <Link to="/" className="nav-items nav-buttons">Products</Link>
                <Link to="/" className="nav-items nav-buttons">Teams</Link>
                <form>
                    <input type="search" className="input-text" placeholder="search"/>
                    <img src={searchlogo} alt="search" className="search-image"/>
                </form>
                {User === null ? 
                <Link to="/Auth" className="nav-items nav-buttons">Log In</Link> :
                <>
                <Link to="/"><Avatar>A</Avatar></Link>
                <Button className="nav-items nav-buttons">Log Out</Button>
                </>
                
            }



            </div>
        </nav>
    )
}

export default Navbar