import React from "react"
import Leftsidebar from "../Leftsidebar"
import Rightsidebar from "../Rightsidebar"

import "./index.css"

const QuestionsPage=()=>{

    return(
        <div className="navsidebars-container">
            <Leftsidebar/>
            <div className="home-conatiner">
                <Rightsidebar/>

            </div>
        </div>
    )
}

export default QuestionsPage