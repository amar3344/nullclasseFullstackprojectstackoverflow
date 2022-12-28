import {NavLink} from "react-router-dom"

import "./index.css"
import earthlogo from "../../../assets/earthlogo.svg"
import pen from "../../../assets/pen.svg"
import chatbox from "../../../assets/chat.svg"
import stackImage from "../../../assets/stack-image.png"

const SideNavbar =()=>{

    return(
        <div className="home-page-container">
            <nav className="left-side-bar" >
                <NavLink to="/" className="left-nav-bar-links" activeClass="active">Home</NavLink>
                <p>Public</p>
                <div className="container-left-nav">
                    <img src={earthlogo} alt="logo" width="15px" style={{"margin-top":"12px"}}/>
                    <div className="container-a">
                        <NavLink to="/Questions" className="left-nav-bar-links">Questions</NavLink>
                        <NavLink to="/tags" className="left-nav-bar-links">Tags</NavLink>
                        <NavLink to="/user" className="left-nav-bar-links">Users</NavLink>
                        <NavLink to="/companies" className="left-nav-bar-links">Companies</NavLink>    
                    </div>
                </div>
            </nav> 

            <div className="main-and-right-container">
                <div clasName="main-container">
                    <h1>main-container</h1>
                </div>
                <ul className="right-container">
                    <li className="right-container-a">
                        <h6 className="heading-widgest">The Overflow Blog</h6>
                        <div className="side-wedge-container">
                            <img src={pen} alt="pen" width="12px" style={{"padding":"0px 10px"}}/>
                            <p className="tag-wedges">Why the number input is the worst input</p>
                        </div>
                        <div className="side-wedge-container">
                            <img src={pen} alt="pen" width="12px" style={{"padding":"0px 10px"}}/>
                            <p className="tag-wedges">Picture perfect images with the modern element</p>
                        </div>
                    </li>
                    <li className="right-container-a">
                        <h6 className="heading-widgest">Featured on Meta</h6>
                        <div className="side-wedge-container">
                            <img src={chatbox} alt="pen" width="12px" style={{"padding":"0px 10px"}}/>
                            <p className="tag-wedges">Navigation and UI research starting soon</p>
                        </div>
                        <div className="side-wedge-container">
                            <img src={stackImage} alt="logo" className="stackoverflow-image"/>
                            <p className="tag-wedges">2022 Community Moderator Election Results - now with two more mods!</p>
                        </div>
                        <div className="side-wedge-container">
                            <img src={stackImage} alt="logo" className="stackoverflow-image"/>
                            <p className="tag-wedges">I'm standing down as a moderator</p>
                        </div>
                        <div className="side-wedge-container">
                            <img src={stackImage} alt="logo" className="stackoverflow-image"/>
                            <p className="tag-wedges">Temporary policy: ChatGPT is banned</p>
                        </div>
                    </li>
                    <li className="right-container-a">
                        <h6 className="heading-widgest">Hot Meta Posts</h6>
                        <div className="side-wedge-container">
                            <p>56</p>
                            <p className="tag-wedges">I worry that ChatGPT answers could currently be too tricky for use in review...</p>
                        </div>
                    </li>
                </ul>
                
            </div> 
        </div>
    )

}

export default SideNavbar