import React from "react"
import "./index.css"

import pen from "../../assets/pen.svg"
import blackLogo from "../../assets/blackstackoverflow.svg"
import chat from "../../assets/chat.svg"

const Widges =()=>{

    return(
        <div className="widges-container">
            <div className="right-widge-containers">
                <h5>The Overflow Blog</h5>
                <div className="blogs-container">
                    <img src={pen} alt="pen" className="div-logos" />
                    <p>The Great Resignation is here. What does that mean for developers?</p>
                </div>
                <div className="blogs-container">
                    <img src={pen} alt="pen" className="div-logos"/>
                    <p>Remote work is killing big offices. Cities must change to survive</p>
                </div>
            </div>

            <div className="right-widge-containers">
                <h5>Featured on Meta</h5>
                <div className="blogs-container">
                    <img src={chat} alt="pen" className="div-logos" />
                    <p>The Great Resignation is here. What does that mean for developers?</p>
                </div>
                <div className="blogs-container">
                    <img src={blackLogo} alt="pen" className="div-logos"/>
                    <p>2022 Community Moderator Election Results - now with two more mods!</p>
                </div>
                <div className="blogs-container">
                    <img src={blackLogo} alt="pen" className="div-logos"/>
                    <p>I'm standing down as a moderator</p>
                </div>
                <div className="blogs-container">
                    <img src={blackLogo} alt="pen" className="div-logos"/>
                    <p>Temporary policy: ChatGPT is banned</p>
                </div>
            </div>

            <div className="right-widge-containers">
            <h5>Hot Meta Posts</h5>
                <div className="blogs-container">
                    <p>26</p>
                    <p>Did anyone keep a [record]?</p>
                </div>
            </div>


        </div>
       
    )
}

export default Widges