import React from "react"
import Leftsidebar from "../../components/Leftsidebar"
import QuestionDetails from "../../components/QuestionDetails"
import Rightsidebar from "../../components/Rightsidebar"

import "./index.css"

const QuestionsPage =()=>{

    
    return(
        <div className="navsidebars-container">
            <Leftsidebar/>
            <div className="home-conatiner">
                <QuestionDetails/>
                <Rightsidebar/>

            </div>
        </div>
    )
}

export default QuestionsPage